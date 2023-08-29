import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let apiurl = "https://64e4fcabc5556380291404a3.mockapi.io/api/v2"

export const getProducts = createAsyncThunk("product/getProducts",
  async (param1, thunkApi) => {
    try {
      const res = await axios.get(apiurl + "/products")
      console.log(res.data, '-----data------');
      return res.data;

    } catch (error) {
      console.log(error);
      thunkApi.rejectWithValue(error)
    }
  })

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoaded: false,
    isError: false,
    errorMessage: ""
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoaded = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoaded = false;
      state.products = action.payload
    },
    [getProducts.rejected]: (state, action) => {
      state.Error = true;
      state.isLoaded = false;
      state.errorMessage = action.payload
    }
  }
})

export default productSlice.reducer