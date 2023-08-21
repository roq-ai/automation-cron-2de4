import * as yup from 'yup';

export const administratorValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  last_login: yup.date().nullable(),
  organization_id: yup.string().nullable().required(),
});
