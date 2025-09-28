import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Post } from "../types";
import axios from "axios";

interface PostState {
  posts: Post[];
  post: Post | null;
  loadingPosts: boolean;
  loadingPost: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  post: null,
  loadingPosts: false,
  loadingPost: false,
  error: null,
};

// Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get<Post[]>(
    "https://debugged-backend-2.onrender.com/api/posts/"
  );
  return response.data;
});

// Fetch single post by ID (with cache check)
export const fetchPostById = createAsyncThunk<
  Post,
  number,
  { state: { posts: PostState } }
>("posts/fetchPostById", async (id, { getState }) => {
  const state = getState();

  //If post already exists in cache, return it instead of making a request
  const cachedPost = state.posts.posts.find((p) => p.id === id);
  if (cachedPost) {
    return cachedPost;
  }

  const response = await axios.get<Post>(
    `https://debugged-backend-2.onrender.com/api/posts/${id}/`
  );
  return response.data;
});

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.post = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all posts
      .addCase(fetchPosts.pending, (state) => {
        state.loadingPosts = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loadingPosts = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loadingPosts = false;
        state.error = action.error.message || "Failed to fetch posts";
      })

      // Fetch single post
      .addCase(fetchPostById.pending, (state) => {
        state.loadingPosts = true;
        state.error = null;
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.loadingPosts = false;
          state.post = action.payload;

          //Keep cache updated
          const exists = state.posts.find((p) => p.id === action.payload.id);
          if (!exists) {
            state.posts.push(action.payload);
          }
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loadingPost = false;
        state.error = action.error.message || "Failed to fetch post";
      });
  },
});

export const { clearPost } = postsSlice.actions;
export default postsSlice.reducer;
