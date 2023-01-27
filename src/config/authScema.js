import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),

  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
});

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  name: yup
    .string()
    .min(3, ({ min }) => `Name must be at least ${min} characters`)
    .required('Name is required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
});

export { loginSchema,signupSchema };
