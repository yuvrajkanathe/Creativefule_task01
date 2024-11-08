import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInstagramPages = createAsyncThunk(
  'instagramPages/fetchInstagramPages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Sample API endpoint for testing
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const instagramPagesSlice = createSlice({
  name: 'instagramPages',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstagramPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInstagramPages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInstagramPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch data';
      });
  },
});

export default instagramPagesSlice.reducer;
