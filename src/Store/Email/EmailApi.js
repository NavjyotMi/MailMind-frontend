import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const EmailApi = createApi({
  reducerPath: "EmailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://email-segregator-backend-1.onrender.com/api/v1/user",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: (body) => ({ url: `getmail/?email=${encodeURIComponent(body)}` }),
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
