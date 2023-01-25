import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest} from "../requestMethods";
import axios from "axios";

export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    try{    
        const res =await axios.post("https://ecommerce-api-5ei6.onrender.com/api/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};