import "./index.css";
import Message from "../Message/Message";


const Messages = ({ messages, user }) => {
  return (
    <div>
      <div className="Messages">
        <div>
          <h4>
            {user.username}
          </h4>
        </div>
        <input type="text" placeholder="🔍 Search" />
        <ul>
          {messages?.map((messages) => (
            <li key={messages?.id}>
              <Message messages={messages} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
