import "./index.css"
import React, { useState, useEffect } from "react";

const SingleChat = () => {
  const [chatName, setChatName] = useState("");
  const [messageList, setMessageList] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 

  useEffect(() => {
    fetch("https://api.npoint.io/45615d0ddef177eef95b")
      .then((res) => res.json())
      .then((data) => {
        setChatName(data);
        setMessageList(data.messageList[0].messages); 
      });
    console.log(chatName);
  }, []);

 
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: messageList.length + 1,
      sender: "John",
      content: inputValue,
      is_read: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessageList([...messageList, newMessage]);
    setInputValue("");
  };

  return (
    <div>
      {console.log("click")}
      <div className="chat-container">
        <div className="message-list">
          {messageList.map((message) => (
            <div
              key={message.id}
              className={
                message.sender === "John"
                  ? "message outgoing"
                  : "message incoming"
              }
            >
              <img
                src={
                  message.sender === "John"
                    ? "https://robohash.org/john.png"
                    : "https://robohash.org/emily.png"
                }
                alt={message.sender}
                className="avatar"
              />
              <div className="content">
                <p className="text">{message.content}</p>
                <span className="time">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        <form className="message-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type message here"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default SingleChat;
