import React, { useState } from 'react';
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

import { Formik } from 'formik';

import { useNavigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import Form from 'react-bootstrap/Form';
import { createResourceWithoutToken } from 'src/config/SimpleApis';
import { login_Api, signup_Api } from 'src/config/WebServices';
import { loginSchema } from 'src/config/authScema';
import { handleErrorMessage } from 'src/config/helper';

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await createResourceWithoutToken(login_Api, {
        username: values.email,
        password: values.password
      });

      // const res = await createResourceWithoutToken(signup_Api, {
      //   name: 'tester1',
      //   password: 'arslan123!',
      //   email: 'ranaarslan.zaheer11@crowdbotics.com',
      //   last_name: 'tester',
      //   phone_number: '+973930303030',
      //   user_type: 'owner',
      //   terms_condition: true,
      //   privacy_policy: true
      // });

      localStorage.setItem('token', res.data.token);
      navigate('/dashboards/home');
    } catch (e) {
      handleErrorMessage(e);
    } finally {
      setLoading(false);
    }
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
            <Formik
              initialValues={{
                password: 'arslan123!',
                email: 'ranaarslan.zaheer11@crowdbotics.com'
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ errors, touched, handleChange, handleSubmit, values }) => {
                return (
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ color: '#344054' }}>
                        Email
                      </Form.Label>
                      <Form.Control
                        onChange={handleChange('email')}
                        type="email"
                        isInvalid={errors.email ? true : false}
                        placeholder="Enter email"
                        value={values.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label style={{ color: '#344054' }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        isInvalid={errors.password ? true : false}
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange('password')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
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
                        onClick={() => navigate('/auth/forget')}
                      >
                        Forgot password
                      </Button>
                    </Box>
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
                      startIcon={
                        loading ? <CircularProgress size="1rem" /> : null
                      }
                      disabled={loading}
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
                      <Typography component="span">
                        Don't have an account?
                      </Typography>

                      <Button
                        variant="text"
                        sx={{ color: '#519900', textTransform: 'none' }}
                        onClick={() => navigate('/auth/signup')}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Box>
                );
              }}
            </Formik>
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
