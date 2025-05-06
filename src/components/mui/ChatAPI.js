import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import MarkdownRenderer1 from '../MarkdownRenderer1';
import gfm from 'remark-gfm';

function ChatAPI() {
  const [formData, setFormData] = useState('');
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseData({});
    setLoading(true);

    let requestData = {
      chat: formData,
    };

    try {
      const response = await axios.post(
        'http://localhost:9000/chat',
        requestData
      );
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex', // Flexbox düzeni
          justifyContent: 'space-between', // Öğeler arasında boşluk
          alignItems: 'center', // Dikey hizalama
          width: '100%', // Tam genişlik
          maxWidth: '100ch', // Maksimum genişlik
          margin: '0 auto', // Ortalamak için
          gap: 2, // Öğeler arasında boşluk
          mt: 4, // Yukarıdan boşluk (4 birim)
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Bir şey sorun"
          multiline
          maxRows={4}
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          endIcon={<SendIcon />}
          sx={{ flexShrink: 0 }}
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: 2, // Material-UI spacing (2 birim = 16px)
        }}
      >
        <Typography component="div">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <MarkdownRenderer1
              markdown={responseData.text}
              remarkPlugins={[gfm]}
            />
          )}
        </Typography>
      </Box>
    </>
  );
}

export default ChatAPI;
