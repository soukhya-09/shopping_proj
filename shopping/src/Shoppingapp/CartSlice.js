import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "react-toastify";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        additem:(state,action)=>{
            console.log("kdhs");
           state.push(action.payload)
        },
        removeitem:(state,action)=>{
        return state.filter((item)=>item.id !== action.payload)
        } ,
        toast :()=>{
        
        }
        
    }
})

export const {additem ,removeitem} = CartSlice.actions
export default CartSlice.reducer