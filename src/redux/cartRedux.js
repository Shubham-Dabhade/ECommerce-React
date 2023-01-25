import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:JSON.parse(localStorage.getItem("cart")) || [],
        quantity: JSON.parse(localStorage.getItem("cart"))?.quantity || 0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products=state.products.concat(action.payload)
            state.total+=action.payload.price*action.payload.quantity;
            localStorage.setItem("cart",JSON.stringify(state));
        },
        decProduct:(state,action)=>{
            state.quantity-=1;
            state.products=[...state.products]
            state.total-=action.payload.price*1;
            localStorage.setItem("cart",JSON.stringify(state));
        },
    }
});

export const {addProduct,incProduct,decProduct}= cartSlice.actions;

export default cartSlice.reducer;
