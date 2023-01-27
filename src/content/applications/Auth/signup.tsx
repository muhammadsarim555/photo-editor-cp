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

import { ToastContainer } from 'react-toastify';
import { Formik } from 'formik';

import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { signupSchema } from 'src/config/authScema';
import { handleErrorMessage } from 'src/config/helper';
import { createResourceWithoutToken } from 'src/config/SimpleApis';
import { signup_Api } from 'src/config/WebServices';

import { errorMsg } from '../../../config/helper';

import CircularProgress from '@mui/material/CircularProgress';

const theme = createTheme();

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SignUp() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [readTerms, setReadTerms] = useState(false);

  const handleSignUp = async (values) => {
    setLoading(true);
    try {
      console.log('WORKING', values);
      // const res = await createResourceWithoutToken(login_Api, {
      //   username: values.email,
      //   password: values.password
      // });
      if (readTerms) {
        const res = await createResourceWithoutToken(signup_Api, {
          name: values.name,
          password: values.password,
          email: values.email,
          last_name: 'tester',
          phone_number: '+973930303030',
          user_type: 'owner',
          terms_condition: true,
          privacy_policy: true
        });
      } else {
        errorMsg('Please read Terms & Condition');
      }
      // localStorage.setItem('token', res.data.token);
      // navigate('/dashboards/home');
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
            alignContent: 'center',
            my: 4,
            py: 8
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
                Sign up
              </Typography>

              <Typography
                component="p"
                variant="subtitle1"
                sx={{ color: '#667085' }}
              >
                Create an account below.
              </Typography>
            </Box>
            <Formik
              initialValues={{
                password: '12345678',
                email: 'abc@yopmail.com',
                name: 'asdfasdfsadf'
              }}
              validationSchema={signupSchema}
              onSubmit={(values) => {
                handleSignUp(values);
              }}
            >
              {({ errors, touched, handleChange, handleSubmit, values }) => {
                return (
                  <Box
                    // component="form"
                    // noValidate
                    // onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                  >
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: '#344054' }}>
                          Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          onChange={handleChange('name')}
                          isInvalid={errors.name ? true : false}
                          value={values.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: '#344054' }}>
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          onChange={handleChange('email')}
                          isInvalid={errors.email ? true : false}
                          value={values.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label style={{ color: '#344054' }}>
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your Password"
                          onChange={handleChange('password')}
                          isInvalid={errors.password ? true : false}
                          value={values.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Checkbox {...label} value={readTerms} onChange={() => setReadTerms(!readTerms)}/>
                      <Typography component="span">
                        I have read and to the
                      </Typography>
                      <Button
                        variant="text"
                        sx={{ color: '#519900', textTransform: 'none' }}
                        onClick={() => navigate('/public/terms&Condition')}
                      >
                        Terms of use
                      </Button>
                      <Typography component="span">and the</Typography>
                      <Button
                        variant="text"
                        sx={{ color: '#519900', textTransform: 'none' }}
                      >
                        Privacy policy
                      </Button>
                    </Form>
                    <Button
                      type="button"
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
                      onClick={() => handleSubmit()}
                      startIcon={
                        loading ? <CircularProgress size="1rem" /> : null
                      }
                      disabled={loading}
                    >
                      Create account
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
                        Already have an account?
                      </Typography>

                      <Button
                        variant="text"
                        sx={{ color: '#519900', textTransform: 'none' }}
                        onClick={() => navigate('/auth/login')}
                      >
                        Log in
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
      <ToastContainer />
    </ThemeProvider>
  );
}
