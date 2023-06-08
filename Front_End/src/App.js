import React from 'react';
import Chatbot from './components/Chatbot';
import { Container, Typography, Box } from '@mui/material';

import logo from './logo.png'; // Import the logo image

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <img src={logo} alt="Logo" style={{ width: '64px', marginRight: '8px' }} />  
        <Typography variant="h4" align="left">
          Virtual Buddy AI
        </Typography>
      </Box>
      <Chatbot />
    </Container>
  );
};

export default App;
