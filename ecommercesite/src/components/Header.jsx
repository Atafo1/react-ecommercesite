import './header2.css'
//import {Link} from 'react-router';
import {useState} from 'react';
import {useNavigate} from 'react-router'

//The LInk feature can be used in place of the a tag to navigate without reloading page 
//and replace href with to
import {NavLink} from 'react-router';
import logoWhite from '../assets/images/logo-white.png'
import MlogoWhite from '../assets/images/mobile-logo-white.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import CartIcon from '../assets/images/icons/cart-icon.png'
export function Header({cart}){
    let totalQuanitity=0;
    cart.forEach((cartItem)=>{
        totalQuanitity+=cartItem.quantity;
    })
    
    const [searchText,setSearchText]=useState(); 
  
     const navigate=useNavigate();
      function searchBtn(){
       navigate(`/?search=${searchText}`);
    }
     function saveInputText(event){

            setSearchText(event.target.value);
        }
   
       
     
   
   
     return(
        <>
          <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                <img className="logo"
                    src={logoWhite} />
                <img className="mobile-logo"
                    src={MlogoWhite} />
                </NavLink>
            </div>
            
            <div className="middle-section">
                <input className="search-bar" onChange={saveInputText} type="text" placeholder="Search" />

                <button className="search-button" onClick={searchBtn}>
                <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/order">

                <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                <img className="cart-icon" src={CartIcon} />
                <div className="cart-quantity">{totalQuanitity}</div>
                <div className="cart-text">Cart</div>
                </NavLink>
            </div>
            </div>
        </>
     );
}