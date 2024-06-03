import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, actions) {
            state.push(actions.payload);
        },
        remove(state, actions) {
            return state.filter((item) => item.id !== actions.payload);
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;