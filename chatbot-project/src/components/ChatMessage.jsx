 //THIS COMPONENT SHOWS HOW IT WILL THE MESSSAGES WILL BE DISPLAYED

 //TO IMPORT A FILE INSIDE ANOTHER FOLDER OR OUTSIDE THE FOLDER IN USE WE "../"
 import RobotProfilePic  from '../assets/robotpic.png';
 import UserProfilePic  from '../assets/profilepic.png';
 import './ChatMessage.css'
 import dayjs from 'dayjs';
 //IN ORDER TO SE A COMPONENT OUTSIDE THE FILE OR IN ANOTHER FILE
 //YOU NEED TO EXPORT IT USING THE KEYWORD "export " beside the function 
 export function ChatMessage({message,sender}){
          const time=dayjs().valueOf();
         const time2=dayjs(time).format('h:mma')
          function Watch(){
            return(
             <p>{time2}</p>
            );
          }
            return (
                <div className={
                    sender==='user'
                    ?"chat-message-user"
                    :"chat-message-robot"
                }>
                    {/*  shorcut for the if statement ,if sender is equal to 
                        robot then it returns the image*/}
                 {sender === "robot" &&  
                    ( <img src={RobotProfilePic}  className="chat-message-profile"/>)
                }
                <div className="chat-message-text">
                 {message}
                 {Watch()}
                 </div>
                {sender ==="user" && 
                    (<img src={UserProfilePic}   className="chat-message-profile"/>)
                }
                </div>
            );
          }