//NOTICE NOW WE DO NOT USE REACR.USESTATE BUT JUST 
// THE HOOKS THEMSELVES LIKE USESATATE BECAUSE WE HAVE NOW DOWNLOADED
//REACT INTO OUR NODE MODUKES USING CREATE SO WE IMPORT MODULES
//  OF HOOKS WHEN NEEDED FROM REACT LIKE DOWN BELOW
import { useState,useEffect} from 'react'
import {Chatbot} from 'supersimpledev';
//When importing a js file or jsx file when we are using Vite we don't need to 
// to .js or .jsx,it will add it automaticaly
import {ChatInput} from './components/ChatInput';
import {ChatMessage} from './components/ChatMessage';
//WITH DEFAULT EXPORT NO NEED TO ADD CURLY BRACKETS WHEN USED TO EXPORT
import ChatMessages from './components/ChatMessages';
import {Display} from './components/Display';
//Vite lets import any type of file
import './App.css'


//THE REASON WE HAVE TWO SEPERATE CSS FILES IS BECUASE APRT FROM MAKING
//THE SITE MORE ORGANISED ,THE APP.CSS IS FOR CSS CODES THAT CONTROL OR DESIGN 
//THE APP COMPONENET ITSELE THEN INDEX.CSS ARE FOR THE CSS CODES THAT CONTROL
//THE OVERALL SITE
//'./' means the current folder the folder that contains this
//folder
        

 function App(){
            const [chatMessages,setChatMessages]=  useState([]);
          

            useEffect(() => {
            Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function() {
                return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
            }
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);
             //note you can not style a fragment
            
            return (

            <div className="app-container">
                 
                 {/*you can put javascript directly into the function call braces like below
                    */}
                <ChatMessages 
                chatMessages={chatMessages}
                />
                <Display chatMessages={chatMessages}/>
                <ChatInput 
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                 />
            </div> 
            );
          }


export default App
