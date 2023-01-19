import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';

const theme = createTheme();

export default function SignInSide() {

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Box
          sx={{
            position: 'absolute',
            top: 30,
            left: 30
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 50,
              height: 50
            }}
            alt="Zain Baptista"
            src="/static/images/logo/logo.svg"
          />
        </Box>
        <Grid
          item
          container
          xs={12}
          sm={8}
          md={6}
          sx={{
            alignSelf: 'center',
            alignContent: 'center'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography component="h1" variant="h4">
                Log in
              </Typography>

              <Typography
                component="p"
                variant="subtitle1"
                sx={{ color: '#667085' }}
              >
                Welcome back! Please enter your details.
              </Typography>
            </Box>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ color: '#344054' }}>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ color: '#344054' }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember for 30 days"
                  />

                  <Button
                    variant="text"
                    sx={{ color: '#519900', textTransform: 'none' }}
                    onClick={() => navigate("/auth/forget")}
                  >
                    Forgot password
                  </Button>
                </Box>
              </Form>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: '#4D9900',
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Sign In
              </Button>

              <Box
                sx={{
                  alignSelf: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography component="span">Don't have an account?</Typography>

                <Button
                  variant="text"
                  sx={{ color: '#519900', textTransform: 'none' }}
                  onClick={() => navigate("/auth/signup")}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={12}
          md={6}
          sx={{
            backgroundImage: 'url(/static/images/backgrounds/authbg.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light'
            //     ? t.palette.grey[50]
            //     : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
