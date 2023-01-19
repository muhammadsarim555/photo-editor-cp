import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

const theme = createTheme();

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/auth")
    },2000)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={12}
          md={12}
          sx={{
            backgroundImage: 'url(/static/images/logo/appIcon.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#519900',
            backgroundSize: 'contained',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
