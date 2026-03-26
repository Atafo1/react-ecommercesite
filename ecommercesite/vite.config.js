import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      //this is called a server proxy configuration so anytime 
      //a url starts with /api it will load the http below instaed of typing
      //the full thing
      '/api':{
        target:'http://react-ecommercesitebackend.onrender.com'
      },
      '/images':{
         target:'http://react-ecommercesitebackend.onrender.com'
      }
    }
  }
})
