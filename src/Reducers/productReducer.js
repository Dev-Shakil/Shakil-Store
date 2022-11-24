const ProductReducer = (state,action)=>{
 

    switch(action.type){
        case "IS_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "API_PRODUCTS":
            const featuredProducts = action.payloads.filter((currElem)=>{
               return currElem.featured ===true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payloads,
                featureProducts:featuredProducts,
            }
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true, 
            };
        case "SINGLE_API_LOADING":
            return{
                ...state,
                isSingleLoading:true
            };
        case "SINGLE_API_PRODUCT":
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload,
            }
        case "SINGLE_API_ERROR":
            return{
                ...state,
                isError:true,
                
            }
        default:return state

};}
export default ProductReducer