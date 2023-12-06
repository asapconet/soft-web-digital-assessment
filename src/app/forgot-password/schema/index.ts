import * as yup from "yup";

export const resetEmailSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const confirmResetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(32, "Password must consist of 32 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password must contain numbers, lowercase and uppercase letters"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

export const otpSchema = yup.object().shape({
  opt: yup.number().min(8, "Password must have at least 8 characters"),
});
