import "./HomePage.css";
//we used .. to access the outer page
import axios from 'axios';
import {useEffect,useState} from 'react'
import { Header } from "../../components/Header";
import {useSearchParams} from 'react-router'
import { ProductsGrid } from './ProductsGrid';
export function HomePage({cart,loadCart}) {
    const [products,setProducts]=useState([]);


       const [searchParams]=useSearchParams();  
     const search=searchParams.get('search');

 useEffect(()=> {
         let url = "http://react-ecommercesitebackend.onrender.com/api/products";

  if (search) {
    url = `http://react-ecommercesitebackend.onrender.com/api/products?search=${search}`;
  }

     axios.get(url)
              .then((response)=>{
      setProducts(response.data);
       });
    },[search]);
       

    // fetch gest the data from the backend which in that link
    // fetch('http://react-ecommercesitebackend.onrender.com/api/products')
  
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
        // axios.get('http://react-ecommercesitebackend.onrender.com/api/products')
        //         .then((response)=>{
        //        setProducts(response.data);
        //   });
        const getHomeData=async () => {
               const response= await axios.get('http://react-ecommercesitebackend.onrender.com/api/products');
               setProducts(response.data);
        };
       
       
            //this is called a server proxy configuration so anytime 
      //a url starts with /api it will load the http below instaed of typing
      //the full thing
          getHomeData();
    },[]);
   
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
         <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
