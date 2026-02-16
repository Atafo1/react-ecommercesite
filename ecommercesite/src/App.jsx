import {Route, Routes} from 'react-router';
import {HomePage} from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      {/*you can use index instead of path="" for empty paths */}
      <Route path="/" element={ <HomePage/>} />
      <Route path="checkout" element={<CheckoutPage/>} />
    </Routes>
    </>
  )
}

export default App
