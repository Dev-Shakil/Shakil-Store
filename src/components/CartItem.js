import React, { useContext} from 'react'
import FormatPrice from "../Helpers/FormatPrice"
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../Context/cart_context';

const CartItem = ({id, name, image, amount, color, max, price,}) => {
    // const [cartAmount, setCartAmount] = useState(amount)
   
    const {removeCart,setIncrease, setDecrease} = useContext(CartContext);
  return (
    
    <div className="cart-heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id}/>
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>Color:</p>
                    <div className="color-style" style={{backgroundColor:color, color:color}}></div>
                </div>
            </div>
        </div>

        {/* Price */}

        <div className="cart-hide">
            <p><FormatPrice price={price}/></p>
        </div>

         {/* Quantity */}
        <CartAmountToggle
            amount={amount}
            setDecrease={()=>setDecrease(id)}
            setIncrease={()=>setIncrease(id)}
        />
        {/* subtotal */}
        <div className="cart-hide">
           <p> <FormatPrice price={price*amount}/></p>
        </div>
        {/* Remove Button */}
        <div>
            <FaTrash className="remove_icon" onClick={()=>removeCart(id)} />
        </div>
    </div>
  )
}

export default CartItem
