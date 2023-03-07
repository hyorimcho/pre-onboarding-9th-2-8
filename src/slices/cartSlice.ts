import { IProduct } from '@/interface/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProduct>) => {
      return [...state, { ...action.payload, count: 1 }];
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
