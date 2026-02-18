import {Route, Routes} from 'react-router';
import {HomePage} from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import {OrderPage} from './pages/OrderPage';
import {TrackPage} from './pages/TrackPage.jsx';
import {NfPage} from './pages/NfPage.jsx';
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      {/*you can use index instead of path="" for empty paths */}
      <Route path="/" element={ <HomePage/>} />
      <Route path="checkout" element={<CheckoutPage/>} />
      <Route path="order" element={<OrderPage/>} />
      <Route path="tracking" element={<TrackPage/>}/>
      <Route path="*" element={<NfPage/>}/>
    </Routes>
    </>
  )
}

export default App
