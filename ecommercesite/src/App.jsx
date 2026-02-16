import {Route, Routes} from 'react-router';
import {HomePage} from './pages/HomePage'
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      {/*you can use index instead of path="" for empty paths */}
      <Route path="/" element={ <HomePage/>} />
      <Route path="checkout" element={<div>chckout poage</div>}m />
    </Routes>
    </>
  )
}

export default App
