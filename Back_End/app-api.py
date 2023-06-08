import requests
import json

API_TOKEN = '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';
API_URL = "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()

output = query({
	"inputs": "What is your purpose?",
})

print(json.dumps(output, indent=4))
