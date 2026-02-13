//The main.jsx file calls the App cmponenet or the main interface 
// and creates the root and renders it onto the website
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//StrictMode gives us additional chacks and warnings when developing the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
