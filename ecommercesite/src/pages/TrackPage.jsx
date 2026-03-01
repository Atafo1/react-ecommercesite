//  import "./TrackPage.css";
//  import { useParams, useEffect, useState } from "react";
//  import  axios  from "axios";
//  import { Header } from "../components/Header";
//  import { Link } from "react-router";
//  import dayjs from 'dayjs'
//  export function TrackPage({ cart }) {
//    const { orderId, productId } = useParams();
//    const [order, setOrder] = useState([null]);
//    useEffect(() => {
//      axios.get(`/api/orders/${orderId}?expand=products`).then((response) => {
//        setOrder(response.data);
//      });
//    }, [orderId]);
//    if (!order) {
//      return null;
//    }
//    return (
//      <>
//        <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
//        <title>Tracking</title>
//        <Header cart={cart} />
//        {order.products.map((orderer) => {
//          <div className="tracking-page">
//            <div className="order-tracking">
//              <Link className="back-to-orders-link link-primary" to="/order">
//                View all orders
//              </Link>

//              <div className="delivery-date">Arriving on{dayjs(orderer.orderTimeMs).format("MMMM D")} </div>

//              <div className="product-info">
//               {orderer.product.name}
//              </div>

//              <div className="product-info">Quantity: {orderer.quantity} </div>

//              <img
//                className="product-image"
//                src="images/products/athletic-cotton-socks-6-pairs.jpg"
//              />

//              <div className="progress-labels-container">
//                <div className="progress-label">Preparing</div>
//                <div className="progress-label current-status">Shipped</div>
//                <div className="progress-label">Delivered</div>
//              </div>

//              <div className="progress-bar-container">
//                <div className="progress-bar"></div>
//              </div>
//            </div>
//          </div>;
//        })}
//      </>
//    );
//  }
import "./TrackPage.css";
import {  useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Link, useParams} from "react-router";
import dayjs from "dayjs";

export function TrackPage({ cart }) {
 
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/orders/${orderId}?expand=products`)
      .then((response) => {
        setOrder(response.data);
      });
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  const product = order.products.find(
    (item) => item.productId === productId
  );

  if (!product) {
    return <div>Product not found</div>;
  }
 let totalDeliveryTimeMs=product.estimatedDeliveryTimeMs-order.orderTimeMs
 let timePassedMs =dayjs().valueOf()-order.orderTimeMs;
 let deliveryPercent=(timePassedMs/totalDeliveryTimeMs)*100;

 if (deliveryPercent > 100) deliveryPercent = 100;
if (deliveryPercent < 0) deliveryPercent = 0;

const isPreparing = deliveryPercent < 33;
const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
const isDelivered = deliveryPercent >= 100;
  return (
    <>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/order">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
          </div>

          <div className="product-info">
            {product.product.name}
          </div>

          <div className="product-info">
            Quantity: {product.quantity}
          </div>

             <img
               className="product-image"
               src="images/products/athletic-cotton-socks-6-pairs.jpg"
             />

             <div className="progress-labels-container">
               <div className={`progress-label ${isPreparing &&'current-status'}`}>Preparing</div>
               <div className={`progress-label ${isShipped &&'current-status'}`}>Shipped</div>
               <div className={`progress-label ${isDelivered &&'current-status'}`}>Delivered</div>
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar" style={{width:`${deliveryPercent}`}}></div>
             </div>
        </div>
      </div>
    </>
  );
}