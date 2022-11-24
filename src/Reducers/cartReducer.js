const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let {id, amount, color, product} = action.payload;
            console.log(amount);
            let findExistingCart = state.cart.find((existCart)=>existCart.id === id + color);
            console.log(findExistingCart)
            if(findExistingCart){
                let UpdatedExist = state.cart.map((curItem)=>{
                    let updateAmount;
                    if(curItem.id === id + color){
                        updateAmount = curItem.amount + amount;
                        if(updateAmount>=curItem.max){
                            updateAmount=curItem.max;
                        }
                       console.log(curItem.max)
                        return{
                            ...curItem,
                            amount:updateAmount,
                        };
                    }else{
                        return curItem;
                    }

                });
                return{
                    ...state,
                   cart:UpdatedExist
                }
            }else{


                let cartProduct 

                cartProduct = {
                    id: id + color,
                    name: product.name,
                    image: product.image[0].url,
                    color:color,
                    amount:amount,
                    price:product.price,
                    max:product.stock,
                }
                return{
                  ...state,
                  cart:[...state.cart,cartProduct]
                }
            } 

          ;
        case "SET_INCREMENT":
            let UpdatedCart = state.cart.map((curItem)=>{
                let dec;
                if(curItem.id===action.payload){
                    
                    dec = curItem.amount+1;
                    if(dec>=curItem.max){
                       dec = curItem.max
                    }
                    return{
                        ...curItem,
                        amount:dec,
                    }
                }
                return curItem
            });
            return{
                ...state,
                cart:UpdatedCart,
            }
        case "SET_DECREMENT":
            let UpdatedDec = state.cart.map((curItem)=>{
                let inc;
                if(curItem.id === action.payload){
                    
                    inc = curItem.amount-1;
                    if(inc<=1){
                        inc = 1;
                    }
                    return{
                        ...curItem,
                        amount:inc,
                    }
                }
                return curItem
            });
            return{
                ...state,
                cart:UpdatedDec,
            }
        case "REMOVE_CART":
            let updatedCart = state.cart.filter((rmCart)=>{
                return rmCart.id !== action.payload
            });
            return{
                ...state,
                cart:updatedCart
            };
        case "CLEAR_CART":
            return{
                ...state,
                cart:[],
            };
        case "CART_TOTAL_ITEM":
            let UpdateTotalItem = state.cart.reduce((initialVal, curVal)=>{
                let {amount} = curVal;
                initialVal = initialVal + amount;
                return initialVal;
            },0);
            return {
                ...state,
                total_amount:UpdateTotalItem,
            }
        case "CART_TOTAL_PRICE":
            let UpdateTotalPrice = state.cart.reduce((initialVal, curVal)=>{
                let {price,amount} = curVal;
                initialVal = initialVal + price*amount;
                return initialVal;
            },0);
            return {
                ...state,
                total_price:UpdateTotalPrice,
            }
    
        default:
            return state;
    }
}
  

export default cartReducer;
