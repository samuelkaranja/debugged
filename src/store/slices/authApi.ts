import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GoogleLoginResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    username: string;
    email: string;
    name: string;
    avatar: string;
  };
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://debugged-backend-2.onrender.com/",
  }),
  endpoints: (builder) => ({
    googleLogin: builder.mutation<GoogleLoginResponse, { token: string }>({
      query: (body) => ({
        url: "auth/google/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGoogleLoginMutation } = authApi;
