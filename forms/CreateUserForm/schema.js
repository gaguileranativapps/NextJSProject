import * as Yup from 'yup';

export default Yup.object().shape({
  displayName: Yup.string()
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required'),
  acceptedTerms: Yup.bool()
    .oneOf([true], 'You must accept the terms and conditions.'),
});