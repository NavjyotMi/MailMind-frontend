import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const UserApi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => "auth/userinfo" }),
  }),
});

export const { useGetUserQuery } = UserApi;

export default UserApi;
