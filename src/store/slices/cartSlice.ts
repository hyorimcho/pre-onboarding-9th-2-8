import { ICart } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (
        itemInCart &&
        itemInCart.quantity! <= action.payload.maximumPurchases
      ) {
        itemInCart.quantity! += action.payload.quantity!;
      } else {
        state.push(action.payload);
      }
    },
    incrementQuantity: (state, action: PayloadAction<ICart>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (
        itemInCart &&
        itemInCart.quantity! <= action.payload.maximumPurchases
      ) {
        itemInCart.quantity! += 1;
      }
      // itemInCart.length += 1;
      console.log('itemInCart', itemInCart);
    },
    decrementQuantity: (state, action: PayloadAction<ICart>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (itemInCart && itemInCart.quantity === 1) {
        itemInCart.quantity = 1;
      } else if (itemInCart) itemInCart.quantity! -= 1;
    },
    removeItem: (state, action: PayloadAction<ICart>) => {
      return state.filter((item) => item.idx !== action.payload.idx);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
