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

import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const theme = createTheme();

export default function ResetPass() {
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
            left: 30,
            zIndex: 1000
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
          <Grid item container xs={12} sm={10} md={6}>
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
                  New password
                </Typography>

                <Typography
                  component="p"
                  variant="subtitle1"
                  sx={{ color: '#667085' }}
                >
                  Create a new password below and save it to update your new
                  password.
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
                    <Form.Label style={{ color: '#344054' }}>
                      New password*
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create a password"
                    />
                    <Form.Text className="text-muted">
                      Invalid Password
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: '#344054' }}>
                      Confirm password*
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create a password"
                    />
                    <Form.Text className="text-muted">
                      Invalid Password
                    </Form.Text>
                  </Form.Group>
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
                  onClick={() => navigate('/auth/login')}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
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
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
