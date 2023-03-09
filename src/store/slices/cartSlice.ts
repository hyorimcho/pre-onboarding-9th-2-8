import { IProduct } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (
        itemInCart &&
        itemInCart.quantity! <= action.payload.maximumPurchases
      ) {
        itemInCart.quantity! += action.payload.quantity as number;
      } else {
        state.push(action.payload);
      }
    },
    incrementQuantity: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (itemInCart && itemInCart.quantity! <= action.payload.maximumPurchases)
        // itemInCart.length += 1;
        console.log('itemInCart', itemInCart);
    },
    decrementQuantity: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (itemInCart && itemInCart.quantity === 1) {
        itemInCart.quantity = 1;
      } else if (itemInCart) itemInCart.quantity! -= 1;
    },
    removeItem: (state, action: PayloadAction<IProduct>) => {
      return state.filter((item) => item.idx !== action.payload.idx);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
