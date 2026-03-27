import './CheckoutHeader.css'
import {Link} from 'react-router'
import MobileLogo from '../../assets/images/mobile-logo.png'
import Logom from '../../assets/images/logo.png'
import CheckoutLock from '../../assets/images/icons/checkout-lock-icon.png'
//we put ../ twice because we need to go out of the folder twice
export function CheckoutHeader({cart}) {
        let totalQuanitity=0;
    cart.forEach((cartItem)=>{
        totalQuanitity+=cartItem.quantity;
    })
  return (
    <>
    
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={Logom} />
              <img className="mobile-logo" src={MobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {totalQuanitity} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={CheckoutLock} />
          </div>
        </div>
      </div>
    </>
  );
}
