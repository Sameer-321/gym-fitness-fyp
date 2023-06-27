import "./message.css";
import { format } from "timeago.js";
export function Message({ messages, own }) {
  //console.log(messages)
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://www.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-male-535853263"
          alt=""
        />
        <p className="messageText"> {messages?.text}</p>
      </div>
      <div className="messageBottom">{format(messages?.createdAt)}</div>
    </div>
  );
}
