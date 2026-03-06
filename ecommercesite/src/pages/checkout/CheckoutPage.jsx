import "./CheckoutPage.css";
import {OrderSummary} from './OrderSummary'
import {PaymentSummary} from './PaymentSummary'
import { useEffect, useState } from "react";
import axios from "axios";

import { CheckoutHeader } from "./CheckoutHeader";
import { DeliveryOptions } from "./DeliveryOptions";
export function CheckoutPage({ cart,loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([null]);
  //we used null because its an object
  useEffect(() => {
    const fetchCheckoutData=async()=>{
    let response=   await axios .get("/api/delivery-options?expand=estimatedDeliveryTime");
     
        setDeliveryOptions(response.data);
    

    response= await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
   
    }
    fetchCheckoutData();
  }, []);
    useEffect(() => {
    const fetchPaymentData=async()=>{
   
    let response= await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
   
    }
    fetchPaymentData();
  }, [cart]);
  //ABOVE WE ADDED THE CART INTO THE DEPENDENCY ARRAY BECAUSE WE WANT TO RERUN
  //THE PAYMENT SUMMARY TO ADJUST WHEN DELIVERY OPTIONS AND THINGS ARE ADDED
  //OR CHANGED SO NOW ANYTIME CART IS ADJUSTED THE USEEFFECT RERUNS WHICH WILL MAKE THE PAYMENT SUMMARY RELOAD
  // window.axios=axios;
  // console.log(axios.post('/api/reset'))
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      {/*This above affect the icon on the tab */}
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
        <OrderSummary cart={cart} loadCart={loadCart} deliveryOptions={deliveryOptions}/>
     
         <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}
