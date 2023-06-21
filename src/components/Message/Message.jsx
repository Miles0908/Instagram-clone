import "./index.css";
import { CameraIcon } from "../icons";
const Message = ({ messages }) => {
  const truncate = (str, n) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  return (
    <div className="Message">
      <img
        className="Message__img"
        src={messages?.userImage ? messages?.userImage : ""}
        alt={messages?.username}
      />
      <h12>
        <b className="Message__Username">{messages?.username}</b>
        <br />
        <p className="Message__Content">{truncate(messages.message, 9)}</p>
      </h12>

      <p className="Message__Ago">.{messages.timestamp}</p>
    </div>
  );
};

export default Message;
