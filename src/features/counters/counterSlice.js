import  { createSlice } from "@reduxjs/toolkit";

const initialState=[
  {
    id:1,
    value:5,
  },
  {
    id:2,
    value:10,
  },
]

const counterSlice=createSlice({
  name : "counters",
  initialState,
  reducers:{
    increment:(state,action)=>{
      const counterIndex=state.findIndex(c=>c.id===action.payload);
      state[counterIndex].value++;
    },
    decrement:(state,action)=>{
      const counterIndex=state.findIndex(c=>c.id===action.payload);
      state[counterIndex].value--;
    }
  }
})

export default counterSlice.reducer;
export const {increment,decrement}=counterSlice.actions;
