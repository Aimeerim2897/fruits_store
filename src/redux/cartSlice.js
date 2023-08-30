import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const newItem = {
        ...payload,
        quantity: 1
      }
      const hasInCart = state.goods.find(item => item?.id === newItem.id)
      if (hasInCart == undefined) {
        state.goods.push(newItem)
        localStorage.setItem('basket', JSON.stringify(state.goods))

      } else {
        console.log("There are goods");
      }
    },
    getInStorage: (state) => {
      if (!localStorage.getItem('basket')) return;
      state.goods = JSON.parse(localStorage.getItem('basket') || [])
    },
    removeItemInCart: (state, { payload }) => {
      state.goods = state.goods.filter(el => el.id !== payload)
      localStorage.setItem('basket', JSON.stringify(state.goods))
    },
    incrementQuantity: (state, { payload }) => {
      state.goods = state.goods.map(el => {
        if (el.id === payload) {
          return {
            ...el,
            quantity: ++el.quantity
          }
        } else return el
      })
      localStorage.setItem('basket', JSON.stringify(state.goods))
    },
    decrementQuantity: (state, { payload }) => {
      state.goods = state.goods.map(el => {
        if (el.id === payload && el.quantity > 0) {
          return {
            ...el,
            quantity: --el.quantity
          }
        } else return el
      })
      localStorage.setItem('basket', JSON.stringify(state.goods))
    },
    extraReducers: {}

  }
})
export const { addItemToCart, getInStorage, removeItemInCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer