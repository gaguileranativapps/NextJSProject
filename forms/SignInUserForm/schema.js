import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required'),
});