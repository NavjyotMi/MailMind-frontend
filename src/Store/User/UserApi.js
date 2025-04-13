import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const UserApi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://email-segregator-backend-1.onrender.com/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => "auth/userinfo" }),
  }),
});

export const { useGetUserQuery } = UserApi;

export default UserApi;
