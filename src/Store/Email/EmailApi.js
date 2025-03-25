import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const EmailApi = createApi({
  reducerPath: "EmailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/user",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: (body) => ({ url: `getmail/?email=${encodeURIComponent(body)}` }),
      keepUnusedDataFor: 900,
    }),
    getSingleMail: builder.query({
      query: (body) => ({
        url: `email/?messageid=${encodeURIComponent(body)}`,
      }),
      keepUnusedDataFor: 900,
    }),
    getCategorizedEmail: builder.mutation({
      query: (body) => ({
        url: "categorize",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useGetEmailsQuery, useGetCategorizedEmailMutation } = EmailApi;
export default EmailApi;
