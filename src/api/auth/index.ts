import { useMutation, useQuery } from "@tanstack/react-query";
import request from "../httpConfig";
import { configOptions, verificationConfigOptions } from "../config";
import config from "@/app/utils/config";
import { AxiosResponse } from "axios";

type UserDetails = {
  email: string;
  password: string;
};

type Nullable<T> = T | undefined | null;

type User = {
  name: string;
  phone: string;
} & UserDetails;

type ResetPasswordEmail = {
  email: string;
};

type verifyOtp = {
  otp: string;
};

type ResetPassword = {
  password: string;
} & verifyOtp &
  UserDetails;

type ApiResponse = {
  message: string;
  token: string;
  data: any;
  error: any;
};

export const useRegister = () =>
  useMutation<AxiosResponse<ApiResponse, Error>, Error, User>({
    mutationFn: (values: User) =>
      request
        .post(`/register`, values)
        .then((res: AxiosResponse<ApiResponse, Error>) => res)
        .catch((err) => err),

    onSuccess: (data) => {
      if (data) {
        localStorage.setItem(config.key.verifyToken, data.data.token);
      }
    },
  });

export const useLogin = () =>
  useMutation<AxiosResponse<ApiResponse, Error>, Error, UserDetails>({
    mutationFn: (values: UserDetails) =>
      request
        .post(`/login`, values)
        .then((res: AxiosResponse<UserDetails, Error>) => res)
        .catch((err) => err.response.message),
  });

export const useForgotPasswordEmail = () =>
  useMutation<AxiosResponse<ApiResponse, Error>, Error, ResetPasswordEmail>({
    mutationFn: (values: ResetPasswordEmail) =>
      request
        .post(`/password/email`, values)
        .then((res) => res.data)
        .catch((err) => err.response.data),
  });

export const useVerifyOtp = () =>
  useMutation<AxiosResponse<any, Error>, Error, verifyOtp>({
    mutationFn: (values: verifyOtp) =>
      request
        .post(`/password/email`, values)
        .then((res) => res.data)
        .catch((err) => err.response.data),
  });

export const useResetPassword = () =>
  useMutation<AxiosResponse<any, Error>, Error, ResetPassword>({
    mutationFn: (values: ResetPassword) =>
      request
        .post(`/password/reset`, values)
        .then((res) => res.data)
        .catch((err) => err.response.data),
  });

// export const useResendOtp = (execute) =>
//   useQuery(
//     ["resendOtp"],
//     () =>
//       request
//         .get("/otp/resend", verificationConfigOptions())
//         .then((res) => res.data)
//         .catch((err) => err.response.data),
//     {
//       retry: false,
//       enabled: execute,
//     }
//   );

// export const useGetFirst100Users = () =>
//   useQuery(['getFirst100Users'], () =>
//     request
//       .get('/admin/users/city-country', configOptions())
//       .then((res) => res.data)
//       .catch((err) => err.response.data),
//   );
//   */
// export const useLogOut = () =>
//   useMutation(
//     (values) =>
//       request
//         .post("/logout", values, configOptions())
//         .then((res) => res.data)
//         .catch((err) => err.response.data),
//     {
//       onSuccess: (data) => {
//         if (data) {
//           localStorage.removeItem(config.key.token);
//         }
//       },
//     }
//   );
