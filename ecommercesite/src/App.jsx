import {Route, Routes} from 'react-router';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {HomePage} from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import {OrderPage} from './pages/orders/OrderPage.jsx';
import {TrackPage} from './pages/TrackPage.jsx';
import {NfPage} from './pages/NfPage.jsx';
import './App.css'

function App() {
  
     const [cart,setCart]=useState([]);
          const loadCart=async()=>{
              const response=await axios.get('https://react-ecommercesitebackend.onrender.com/api/cart-items?expand=product')
              setCart(response.data);
        }
     useEffect(()=> {
        //" ?expand=product " this is called a query parameter it lets us
        //add info to our request ,so now it will add product details to our cart
      
     
        loadCart();  
     },[]);
      
  return (
    <>
    <Routes>
      {/*you can use index instead of path="" for empty paths */}
      <Route path="/" element={ <HomePage cart={cart} loadCart={loadCart} />}/>
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="order" element={<OrderPage cart={cart} loadCart={loadCart}/>} />
      <Route path="tracking/:orderId/:productId" element={<TrackPage cart={cart}/>}/>
      <Route path="*" element={<NfPage/>}/>
    </Routes>
    </>
  )
}

export default App
