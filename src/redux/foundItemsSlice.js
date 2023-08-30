import { createSlice } from '@reduxjs/toolkit'

const foundSlice = createSlice({
  name: "foundItems",
  initialState: {
    items: [],
    value: ""
  },
  reducers: {
    find: (state, { payload }) => {
      const { products, name } = payload
      state.value = name
      state.items = products?.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
      if (!name) {
        state.items = []
        state.value = ""
      }
    },
    clear: (state) => {
      state.items = []
      state.value = ""
    }
  }
})

export const { find, clear } = foundSlice.actions

export const { reducer: foundReducer } = foundSlice