import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingOverlay() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Kapsayıcı alanın tamamını kaplar
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Hafif bir arka plan
        zIndex: 1, // Üstte görünmesi için
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingOverlay;
