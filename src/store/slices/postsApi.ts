import {
  createApi,
  fetchBaseQuery,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { Post } from "../types";

// 1️⃣ Create a timeout wrapper
const fetchBaseQueryWithTimeout =
  (
    timeout = 10000
  ): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout); // cancel after timeout

    const baseQuery = fetchBaseQuery({
      baseUrl: "https://debugged-backend-2.onrender.com/api/",
      prepareHeaders: (headers) => {
        headers.set("Accept", "application/json");
        return headers;
      },
    });

    try {
      const result = await baseQuery(
        typeof args === "string"
          ? { url: args, signal: controller.signal }
          : { ...args, signal: controller.signal },
        api,
        extraOptions
      );
      return result;
    } catch (error) {
      return { error } as any;
    } finally {
      clearTimeout(id);
    }
  };

// 2️⃣ Use your custom baseQuery
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQueryWithTimeout(8000), // ⏱ 8 seconds timeout
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts/",
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}/`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
