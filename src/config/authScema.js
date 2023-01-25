import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  //   userName: yup
  //     .string()
  //     .min(3, ({ min }) => `User name must be at least ${min} characters`)
  //     .required('First Name is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
});

export { loginSchema };
