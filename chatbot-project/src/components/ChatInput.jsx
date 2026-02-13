//THIS IS IN CHARGE WHAT IT WILL BE DISPLAYED

 //TO IMPORT A FILE INSIDE ANOTHER FOLDER OR OUTSIDE THE FOLDER IN USE WE "../"
import { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import SpinnerPic  from '../assets/loading-spinner.gif';
import './ChatInput.css'
//IN ORDER TO SE A COMPONENT OUTSIDE THE FILE OR IN ANOTHER FILE
 //YOU NEED TO EXPORT IT USING THE KEYWORD "export " beside the function 
export function ChatInput({chatMessages,setChatMessages}){
       const[inputText,setInputText]=useState('');
        function saveInputText(event){
            //event.target help us get access the the input text or button that 
            //triggered the event
             setInputText(event.target.value);
        }
         async function sendMessage(){
            setInputText('');
           const newChatMessages=[
             
              ...chatMessages,
              {
                message:inputText,
                sender:'user',
                id:crypto.randomUUID()
              }
            ]
           setChatMessages(newChatMessages);
          setChatMessages([
            ...newChatMessages,
            // This creates a temporary Loading... message.
            // Because we don't save this message in newChatMessages,
            // it will be removed later, when we add the response.
            {
              message: <img src={SpinnerPic} className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);


         const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
             
              ...newChatMessages,
              {
                message:response,
                sender:'robot',
                id:crypto.randomUUID()
              }
            ]);
            setInputText('');
        }
        function pressKey(event){
            if(event.key==="Enter"){
                sendMessage();
            }
           else if(event.key==="Escape"){
                setInputText('');
            }
        }
        
        return(
            <div className="chat-input-container">
                {/* <> are called fragment they allow grouping of elements without
                 creating an extra div*/}
              <input 
                    placeholder="Send the message to Chatbot"  
                     size="30" 
                     //onChange runs a function when we change the text inside
                     //the input
                    onChange={saveInputText}
                    value={inputText}
                    onKeyDown={pressKey}
                    className="chat-input"
                    //value lets us set the value in the input
              />
              <button
                onClick={sendMessage}
                //down below is the declaration of class in react and it is className because in js 
                // there is a reserved word called class
                className="send-button"
              >Send</button>
            </div>
        );
      }