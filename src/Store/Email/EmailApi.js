import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const EmailApi = createApi({
  reducerPath: "EmailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/user",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: () => "getmail",
      keepUnusedDataFor: 900,
    }),
  }),
});
export const { useGetEmailsQuery } = EmailApi;
export default EmailApi;
