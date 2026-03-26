import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// httpss://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      //this is called a server proxy configuration so anytime 
      //a url starts with /api it will load the https below instaed of typing
      //the full thing
      '/api':{
        target:'https://react-ecommercesitebackend.onrender.com'
      },
      '/images':{
         target:'https://react-ecommercesitebackend.onrender.com'
      }
    }
  }
})
