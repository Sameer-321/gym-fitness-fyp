import { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";

export function Conversation(props) {
  const { conversation, currentUser, userInfo } = props;
  const [user, setUser] = useState(null);
  //  console.log(currentUser);

  useEffect(() => {
    // console.log(conversation);
    // console.log(currentUser);
    const friendId = conversation.members.find((m) => m !== currentUser.id);
    // console.log(friendId, 13);
    const getUser = async () => {
      try {
        const res = await axios(
          "http://localhost:5000/api/v1/admin/users/" + friendId
        );
        setUser(res.data);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture?.link
            ? `http://localhost:5000/${user?.profilePicture?.link}`
            : "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
        }
        alt="dubmbell"
      />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
}
