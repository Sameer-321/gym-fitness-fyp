import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showcart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      // state.totalQuantity = action.payload.totalQuantity;
      state.itemList = [action.payload.data.itemList[0]];
      console.log(action.payload.data.itemList.length);
      state.totalQuantity = action.payload.data.itemList.length;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      console.log(state.itemList);
      const findItem = state.itemList.find((item) => item.id === newItem.id);
      if (findItem) {
        findItem.totalQuantity += 1;
        findItem.totalPrice += findItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          totalPrice: newItem.price,
          totalQuantity: 1,
          price: newItem.price,
          img: newItem.img,
          desc: newItem.desc,
        });
        state.totalQuantity++;
      }
    },
    showCart(state) {
      state.showcart = !state.showcart;
    },

    cartIncludeItem(state, action) {
      state.changed = true;
      const { id } = action.payload;
      const findItem = state.itemList.find((item) => item.id === id);
      findItem.totalQuantity++;
      findItem.totalPrice += findItem.price;
    },
    cartExcludeItem(state, action) {
      state.changed = true;
      const { id } = action.payload;
      console.log('id ' + id);
      const findItem = state.itemList.find((item) => item.id === id);
      if (findItem.totalQuantity > 1) {
        findItem.totalQuantity--;
        findItem.totalPrice -= findItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
