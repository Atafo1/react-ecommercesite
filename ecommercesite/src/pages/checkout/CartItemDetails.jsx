import { DeliveryOptions } from './DeliveryOptions';
import {formatMoney} from '../../utils/money';
import {Link } from 'react-router'
import axios from 'axios'
import { useState } from 'react';
export function CartItemDetails({cartItem,deliveryOptions,loadCart}) {
  const deleteCartItem=async ()=>{
      await  axios.delete(`httpss://react-ecommercesitebackend.onrender.com/api/cart-items/${cartItem.productId}`);
      await loadCart();
  };
  const [quantity,setQuantity]=useState(cartItem.quantity);
  const[show,setShow]=useState(false);
   function showInput(){
    setShow(true);
   
  }
   function editQuantity(event){
    setQuantity(event.target.value);
  };
 
  async function updateLink(){
    await axios.put(`httpss://react-ecommercesitebackend.onrender.com/api/cart-items/${cartItem.productId}`,{
      quantity:Number(quantity)
     
    });
    await loadCart();
    setShow(false);
  };
  function enterKey(event){
      if(event.key==="Enter"){
                updateLink();
            }
           else if(event.key==="Escape"){
                setQuantity(cartItem.quantity);
                setShow(false);
            }
  }
 
  return (
    <>
      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              Quantity:
              {show ? (
              <input className="updateQuantity" type="text" 
               style={ {display: show ? "inline":"none"}}
               value={quantity}
               onChange={editQuantity}
               onKeyDown={enterKey}
              />)
             :( <span className="quantity-label">{cartItem.quantity}</span>
             )}
            </span>
            <span className="update-quantity-link link-primary" 
             onClick={showInput}
            >Update </span>
            <span className="delete-quantity-link link-primary"
               ><Link onClick={deleteCartItem}> Delete</Link>
             </span>
          </div>
        </div>
        <DeliveryOptions
          cartItem={cartItem}
          deliveryOptions={deliveryOptions} loadCart={loadCart}
        />
      </div>
    </>
  );
}
