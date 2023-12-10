import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .max(32, "Password must consist of 32 characters")
    .required("Password is required"),
});
