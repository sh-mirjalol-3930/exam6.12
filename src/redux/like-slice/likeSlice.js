import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: JSON.parse(localStorage.getItem("like")) || [],
}
const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers:{
        getDatalike(state,{payload}){
            state.like = [...state.like, payload];
            localStorage.setItem("like", JSON.stringify(state.like));
        },
        removeDatalike(state, { payload }) {
            state.like = state.like.filter((value) => value.id !== payload);
            localStorage.setItem("like", JSON.stringify(state.like));
        },
    }
})

export const {getDatalike, removeDatalike} = likeSlice.actions
export default likeSlice.reducer