import "./index.css";
import Message from "../Message/Message";
import { useState, useEffect } from "react";
import SingleChat from "../SingleChat";

const Messages = ({ messages, user }) => {

  const [selectedMessage, setSelectedMessage] = useState(null);

  const [messagesClass, setMessagesClass] = useState("messages");
  


  const handleClick = (messageId)=>{
    setSelectedMessage(messageId);
    
  }

  return (
    <div>
       {selectedMessage ? (
        <SingleChat message={messages.find((m) => m.id === selectedMessage)} />
      ) : (
      <div className="Messages">
        <div>
          <h4>{user.username}</h4>
        </div>
        <input type="text" placeholder="🔍 Search" />
        <ul>
          {messages?.map((messages) => (
            <li key={messages?.id} onClick={() => setSelectedMessage(messages?.id)}>
           
              <Message messages={messages}  />
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Messages;
