import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import BlogService from '../Services/Blog.service';
import { BlogItemResponseDTO, BlogParamsDTO } from '../Dto/Blog';

export interface BlogState {
  blogs: BlogItemResponseDTO[];
  blogItem: BlogItemResponseDTO | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  blogItem: null,
  isLoading: true,
  error: null,
};

export const getBlogs = createAsyncThunk(
  'blog/list',
  async (params?: BlogParamsDTO) => {
    const response = await BlogService.getBlogs(params);
    return response.data;
  }
);

export const getBlogDetail = createAsyncThunk(
  'blog/detail',
  async (id: string) => {
    const response = await BlogService.getBlogDetail(id);
    return response.data;
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /**Get Blogs */
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.blogs = payload;
        state.isLoading = false;
      })
      .addCase(getBlogDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogDetail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBlogDetail.fulfilled, (state, { payload }) => {
        state.blogItem = payload;
        state.isLoading = false;
      });
  },
});

export const blogSelector = (state: RootState) => state.blog;

export default blogSlice.reducer;
