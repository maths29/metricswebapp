import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://api.coincap.io/v2/assets';

const initialState = {
  standardFlow: [],
};

export const flowChart = createAsyncThunk('fetchkoin/flowchart', async () => {
  const response = await fetch(API);
  const res = await response.json();
  const info = res.data;
  info.map((item) => ({
    id: item.id,
    rank: item.rank,
    symbol: item.symbol,
    name: item.name,
    price: item.priceUsd,
    supply: item.supply,
  }));
  return info;
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
