import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'api.coincap.io/v2/assets';

const initialState = {
  standardFlow: [],
};

export const flowChart = createAsyncThunk('fetchkoin/flowchart', async () => {
  const response = await fetch(API);
  const res = await response.json();
  return res;
});

const myChoice = createSlice({
  name: 'fetchkoin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(flowChart.pending, (state) => ({
      ...state,
    }))
      .addCase(flowChart.fulfilled, (state, action) => ({
        ...state,
        standardFlow: action.payload,
      }))
      .addCase(flowChart.rejected, (state) => ({
        ...state,
      }));
  },
});

export default myChoice.reducer;
