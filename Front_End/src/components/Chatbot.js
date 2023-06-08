import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');  

  const askQuestion = async (question) => {
    try {
      if (!question) {
        throw new Error('Question is empty.');
      }

      const response = await fetch('http://localhost:8080/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error: Failed to fetch response from the server.');
    }
  };

  const handleUserMessage = async (message) => {
    try {
      const newMessage = { text: message, role: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
  
      const response = await askQuestion(message);
      const answer = response?.answer || 'Oops! Something went wrong.';
      const botMessage = { text: answer, role: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '92vh' }}>
      <Box
        sx={{
          flex: '1 1 auto',
          overflowY: 'scroll',
          p: 2,
          background: '#F8F8F8',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            <Box
              sx={{
                p: 2,
                maxWidth: '70%',
                borderRadius: '8px',
                background: message.role === 'user' ? '#E3F2FD' : '#FFFFFF',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                color: message.role === 'user' ? '#2196F3' : '#333333',
              }}
            >
                  {typeof message.text === 'object' ? message.text.result : message.text}

            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ p: 2, borderTop: '1px solid #E0E0E0' }}>
      <TextField
  fullWidth
  placeholder="Type your message..."
  value={input}
  onChange={(event) => setInput(event.target.value)}
  onKeyUp={(event) => {
    if (event.key === 'Enter' && input.trim() !== '') {
      handleUserMessage(input);
      setInput('');
    }
  }}
  InputProps={{
    disableUnderline: true,
    sx: {
      borderRadius: '4px',
      background: '#F5F5F5',
      padding: '10px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
  }}
/>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
      variant="contained"
      color="primary"
      onClick={() => {
        handleUserMessage(input);  // Modify this line
        setInput('');  // Add this line
      }}
      // ...
    >
      Send
    </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chatbot;
