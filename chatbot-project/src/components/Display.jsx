 import ChatMessages from './ChatMessages';
 import './Display.css'
 export function Display({chatMessages}){
            if(chatMessages.length===0){
                return(
                    <h4 className="welcome">Welcome to the chatbot project! send a message in the textbox</h4>
                );

            }
        }