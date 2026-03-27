import axios from "axios";
import { useEffect, useState, Fragment } from "react";

import "./OrderPage.css";
import { Header } from "../../components/Header";

import { OrdersGrid } from "./OrdersGrid";
export function OrderPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders=async()=>{
      const response=await axios.get("https://react-ecommercesitebackend.onrender.com/api/orders?expand=products");
      setOrders(response.data);
    
    }
   getOrders();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div class="orders-page">
        <div class="page-title">Your Orders</div>

      <OrdersGrid orders= {orders}/>
      </div>
    </>
  );
}
