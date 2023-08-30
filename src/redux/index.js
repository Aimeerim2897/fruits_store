import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import { foundReducer } from './foundItemsSlice'


const store= configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    fItems: foundReducer
  }
})
export default store