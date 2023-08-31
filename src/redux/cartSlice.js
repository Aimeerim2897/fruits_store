import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, {payload})=>{
      const newItem = {
        ...payload,
        quantity: 1
      }
      const hasInCart = state.goods.find(item => item?.id === newItem.id)
      if(hasInCart == undefined){
        state.goods.push(newItem)
        localStorage.setItem('basket', JSON.stringify(state.goods))

      }else{
        console.log("There are goods");
      }
    },

  }
})
export const {addItemToCart} = cartSlice.actions
export default cartSlice.reducer