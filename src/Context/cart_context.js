import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/cartReducer"
export const CartContext = createContext();

const getLocaleData = () => {
    let newLoacalData = localStorage.getItem("shakilCart");
    // if (newLoacalData=== []){
    //     return [];
    // }else{
    //     return JSON.parse(newLoacalData);
    // }
    const parsedData = JSON.parse(newLoacalData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
};
const initialStates = {
    cart:getLocaleData(),
    total_price:"",
    total_amount:"",
    shipping_fees:50000,

}

const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialStates);

    const AddToCart = (id, amount, color, product) => {
        dispatch({type:"ADD_TO_CART", payload:{id, amount, color, product}})
    }

    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREMENT",payload:id})
    }
    const setIncrease = (id) =>{
        dispatch({type:"SET_INCREMENT",payload:id})
    }
    const removeCart = (id) => {
        dispatch({type:"REMOVE_CART", payload:id})
    };
    const clearCart = () => {
        dispatch({type:"CLEAR_CART"})
    }
    useEffect(()=>{
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("shakilCart", JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{...state,AddToCart,removeCart,clearCart,setIncrease,setDecrease}}>
        {children}
    </CartContext.Provider>
}
export {CartProvider}