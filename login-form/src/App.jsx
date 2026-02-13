  import {useState} from 'react'
  import './App.css'
      export  function App(){
             const [showPassword,setShowPassword]=useState(false);
          function check(){
                  if(showPassword){
                   setShowPassword(false);
                  }
                  else{
                    setShowPassword(true);
                  }
                  
                }
            return(
                <div className="box">
                    <h2>Hello,Welcome to my website</h2>
                    <div className="inputSection">
                        <input 
                        placeholder="Email"
                        size="50"
                        className="mailBox"
                        />
                        <div>
                            <input
                            type={showPassword?"password":"text"}
                            placeholder="password"
                            className="pwordBox"
                            />
                            <button className="hideBtn"  onClick={check}>Hide</button>
                        </div>
                    </div>
                    <button className="lBtn">Login</button>
                    <button className="rBtn">Sign up</button>
                </div>
            );
        }
     
  