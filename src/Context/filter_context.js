import {createContext, useContext, useEffect, useReducer} from "react";
import { AppContext } from "./productcontext";
import reducer from "../Reducers/filterReducer"

export const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
        maxPrice:0,
        price:0,
        minPrice:0
    }
}

export const FilterContextProvider = ({children}) =>{
    const {products} = useContext(AppContext);

    const [state, dispatch]= useReducer(reducer, initialState);
    
    // to set the grid view of the Products
    const setGridView = ()=> {
        dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = ()=> {
        dispatch({type:"SET_LIST_VIEW"})
    }
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type:"SET_SORT_VALUE", payload:userValue})
    }
    const UpdateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return dispatch({type:"UPDATE_FILTER_VALUES", payload:{name,value}});
    }
    const clearFilters = ()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }
    useEffect(()=>{
       dispatch({type:"SORTING_PRODUCT_VALUE", payload:products});
        dispatch({type:"FILTER_PRODUCTS"})
},[products, state.sorting_value, state.filters])

    useEffect(() => {
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products}
    )}, [products]);
    
    return <FilterContext.Provider value={{...state, setGridView , setListView, sorting, UpdateFilterValue,clearFilters}}>
        {children}
    </FilterContext.Provider>
};



