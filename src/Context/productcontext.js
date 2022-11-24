import axios from "axios";
import React, { useEffect, useReducer } from "react";
import {createContext} from "react";
import reducer from "../Reducers/productReducer"
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    singleProduct:{},
    isSingleLoading:false,
}

const AppProvider = ({children}) =>{
    const [state, dispatch]= useReducer(reducer,initialState);

    const getSingleProduct = async (url)=>{
        dispatch({type:"SINGLE_API_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct = res.data;
            dispatch({type:"SINGLE_API_PRODUCT",payload:singleProduct});

        }
        catch(err){
            dispatch({type:"SINGLE_API_ERROR"})
        }
    };

    const getProducts = async (url)=>{
        dispatch({type:"API_LOADING"})
        try{
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products)
        dispatch({type:"API_PRODUCTS",payloads:products})}
        catch(error){
            dispatch({type:"API_ERROR"})
        }
    }

        useEffect(()=>{
            getProducts(API);
        },[])

   return <AppContext.Provider value={{...state, getSingleProduct }}>{children}</AppContext.Provider>

}

export {AppProvider, AppContext}