import * as Yup from 'yup';

export const validationLogin = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Must be a valid email',
    )
    .matches(/^[^\s]+$/, 'Email cannot contain spaces'),
  password: Yup.string().required('login is required'),
});
