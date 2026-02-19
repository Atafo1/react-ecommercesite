import "./HomePage.css";
//we used .. to access the outer page
import axios from 'axios';
import {useEffect,useState} from 'react'
import { Header } from "../components/Header";

export function HomePage() {
    const [products,setProducts]=useState([]);
 const [cart,setCart]=useState([]);
    // fetch gest the data from the backend which in that link
    // fetch('http://localhost:3000/api/products')
  
    // ,then helps us get the data because fetch there is more like an
    // asynchronous code it does not finish right away
    // response is the output given from the backend
    // .then((response)=>{
    //     //.json gives us the data attached to the response
    //        response.json().then((data) =>{
    //            console.log(data);
    //        })
    // })
    // AXIOS IS CLEANER WAY TO MAKE REQUESTS TO THE BACKEND
    // LIKE DOWN BELOW IT GAVE US DIRECT ACCESS TO THE DATA IT CONVERTS
    // IT TO JSON ALREADY
    useEffect(()=> {
            axios.get('http://localhost:3000/api/products')
                .then((response)=>{
               setProducts(response.data);
          });
            //this is called a server proxy configuration so anytime 
      //a url starts with /api it will load the http below instaed of typing
      //the full thing
          axios.get('/api/cart-items')
          .then((response)=>{
            setCart(response.data);
          });
    },[]);
   
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={product.image}
                  />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars *10}.png`}
                  />
                  <div className="product-rating-count link-primary">{product.rating.count}</div>
                </div>

                <div className="product-price">${(product.priceCents /100).toFixed(2)}</div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
         
        </div>
      </div>
    </>
  );
}
