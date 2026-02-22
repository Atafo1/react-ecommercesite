import "./CheckoutPage.css";
import {OrderSummary} from './OrderSummary'
import {PaymentSummary} from './PaymentSummary'
import { useEffect, useState } from "react";
import axios from "axios";

import { CheckoutHeader } from "./CheckoutHeader";
export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([null]);
  //we used null because its an object
  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      {/*This above affect the icon on the tab */}
      <title>Checkout</title>

      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
        <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>

         <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}
