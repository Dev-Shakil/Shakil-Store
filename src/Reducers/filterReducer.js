const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem)=>curElem.price);
            let maxPrice = Math.max(...priceArr)
            console.log(maxPrice)
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                filters:{
                    ...state.filters,
                    maxPrice,
                    price:maxPrice
                }
            };
        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view:true,
            };  
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view:false,
            } 
        case "SET_SORT_VALUE":
            // let userSort = document.getElementById("sort");
            // let sortValue = userSort.options[userSort.selectedIndex].value;
            return{
                ...state,
                sorting_value:action.payload,
                
            } ;
        case "SORTING_PRODUCT_VALUE":
            let newSort;
            // let tempSortProduct = [...action.payload];
            const {filter_products, sorting_value} = state;
            let tempSortProduct = [...filter_products];

            const sortingProduct = (a, b) => {
                if (sorting_value==="lowest"){
                    return a.price - b.price;
                }
                if (sorting_value==="highest"){
                    return b.price - a.price
                }
                if (sorting_value==="a-z"){
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value==="z-a"){
                    return b.name.localeCompare(a.name)
                }
            }
            newSort = tempSortProduct.sort(sortingProduct)
        
            return{
                ...state,
                filter_products:newSort,
            }
        case "UPDATE_FILTER_VALUES":
            const {name,value} = action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value
                }
            }
        case "FILTER_PRODUCTS":
            const {all_products} = state;
            let tempFilterProduct = [...all_products];
            let {text,category,company,color,price} = state.filters;
            if(text){
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                    return curElem.name.toLowerCase().includes(text);
                })
            }
            if(category!=="all"){
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                    return curElem.category === category;
                })
            }
            if(company!=="all"){
                tempFilterProduct = tempFilterProduct.filter((curcomp)=>{
                    return curcomp.company === company;
                })
            }
            if(color!=="all"){
                tempFilterProduct = tempFilterProduct.filter((curColor)=>{
                    return curColor.colors.includes(color)
                })
            }
            if(price===0){
                tempFilterProduct = tempFilterProduct.filter((curPrice)=>{
                    return curPrice.price === price;
                })
            }else{
                tempFilterProduct = tempFilterProduct.filter((curPrice)=>{
                    return curPrice.price <= price
                })
            }
            return{
                ...state,
                filter_products:tempFilterProduct
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    category:"all",
                    company:"all",
                    color:"all",
                    maxPrice:state.filters.maxPrice,
                    price:state.filters.maxPrice,
                    minPrice:0,
                }
            }
        default:
            break;
    }
}
export default filterReducer;
