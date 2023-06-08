from transformers import AutoTokenizer, AutoModelForCausalLM
import transformers
import torch
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import os
from transformers import GenerationConfig

# Set up logging
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load settings from environment variables
model_name = os.getenv("MODEL", "tiiuae/falcon-7b-instruct")
port = int(os.getenv("PORT", 8080))

tokenizer = AutoTokenizer.from_pretrained(model_name, pad_token="[PAD]")
model = AutoModelForCausalLM.from_pretrained(model_name, trust_remote_code=True)

# Create a GenerationConfig object
gen_config = GenerationConfig(
    max_length=600,
    do_sample=True,
    top_k=10,
    num_return_sequences=1,
    eos_token_id=tokenizer.eos_token_id,
)

pipeline = transformers.pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    torch_dtype=torch.bfloat16,
    trust_remote_code=True,
    device_map="auto",
)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    # Check if question is provided
    if not request.json or 'question' not in request.json or not request.json['question'].strip():
        return jsonify({'error': 'Missing or empty question'}), 400
    question = request.json['question']
    logging.info("Received question: %s", question)
    try:
        # Generate response
        sequences = pipeline(
            question,
            max_length=gen_config.max_length,
            do_sample=gen_config.do_sample,
            top_k=gen_config.top_k,
            num_return_sequences=gen_config.num_return_sequences,
            eos_token_id=gen_config.eos_token_id,
        )
        decoded_output = sequences[0]['generated_text']
        if "<pad>" in decoded_output:
            decoded_output = decoded_output[:decoded_output.index("<pad>")]
        return jsonify({'answer': decoded_output})
    except Exception as e:
        logging.error("Unexpected error: %s", e)
        return jsonify({'error': 'Oops! Something went wrong.'}), 500

if __name__ == '__main__':
    app.debug = True

    app.run(port=port)
