import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  counter: 0,
  showCart: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increment(state, action) {
      const id = state.items.findIndex((item) => item.id === action.payload);
      if (id > -1) {
        state.items[id].count++;
        state.counter++;
      }
    },

    decrement(state, action) {
      const id = state.items.findIndex((item) => item.id === action.payload);
      if (id > -1) {
        state.items[id].count--;
        state.counter--;

        if (state.items[id].count === 0) {
          console.log("yes");
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    addItem(state, action) {
      const id = state.items.findIndex((item) => item.id === action.payload);
      if (id > -1) {
        state.items[id].count++;
      } else {
        state.items.push({
          id: action.payload,
          count: 1,
        });
      }
      state.counter++;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
