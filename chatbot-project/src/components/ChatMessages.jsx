  //THIS FILE OF COMPONENT CONTROLS HOW IT WILL SHOW
  
  //TO IMPORT A FILE INSIDE ANOTHER FOLDER OR OUTSIDE THE FOLDER IN USE WE "../"
 import { useRef,useEffect } from 'react'
 import {ChatMessage} from './ChatMessage';
 import './ChatMessages.css'
  //IN ORDER TO SE A COMPONENT OUTSIDE THE FILE OR IN ANOTHER FILE
 //YOU NEED TO EXPORT IT USING THE KEYWORD "export " beside the function 
 //ANOTHER TO EXPORT OR GIVE OTHER FILES ACCESS IS TO USE EXPORT DEFALUT DOWN BELOW
//ITS NORMALLY USED WHEN EXPORTING JUST ONE THING
 function ChatMessages({chatMessages}){
            {/*useRef is another hook used to save html element*/}
           const chatMessagesRef= useRef(null);
            {/*hooks should always be at the top*/
            /*HOOKS LETS US INSERT REACT FEATURES INTO OUR COMPONENTS*/
              /*useEffect lets us run some code after a component as been created or updated*/
            }
            useEffect(()=>{
               const containerElem=chatMessagesRef.current;
               if(containerElem){
                containerElem.scrollTop=containerElem.scrollHeight;
               }
            },[chatMessages]);
            return (
                <div className="chat-messages-container" ref={chatMessagesRef}>
             { chatMessages.map((chatMessage) =>{
                    return(
                        <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                        />
                       );
               }) }
               </div>
            );
        }
//ANOTHER TO EXPORT OR GIVE OTHER FILES ACCESS IS TO USE EXPORT DEFALUT DOWN BELOW
//ITS NORMALLY USED WHEN EXPORTING JUST ONE THING
export default ChatMessages;