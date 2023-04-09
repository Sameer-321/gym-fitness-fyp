import "./messenger.css";
// import Topbar from "../../components/topbar/Topbar";
import { Conversation } from "../conversations/Conversation.jsx";
import { Message } from "../message/Message.jsx";
import { ChatOnline } from "../chatOnline/ChatOnline.jsx";

import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export function Messenger(props) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const [newMessages, setNewMessages] = useState("");
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  const { info } = props;
  const { isLoggedIn } = props.info;
  console.log(info,21)
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessages({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    //private message
    //kind of auth ********************************************************************
    arrivalMessages &&
      currentChat?.members.includes(arrivalMessages.sender) &&
      setMessages((prev) => [...prev, arrivalMessages]);
  }, [arrivalMessages, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", info.id);
    // socket.current.on("getUsers", ( users) => {
    //   setOnlineUsers(
    //     info.followings.filter((f) => users.some((u) => u.userId === f))
    //   );
    // });
  }, [info]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/conversations/" + info.id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [info.id]);

  useEffect(() => {
    // console.log(messages);
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/messages/" + currentChat?.id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: info.id,
      text: newMessages,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member !== info.id
    );
    socket.current.emit("sendMessage", {
      senderId: info.id,
      receiverId,
      text: newMessages,
    });
    try {
      const res = await axios.post("http://localhost:5000/api/v1/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* <Topbar /> */}
      <div className="messenger">
        <div className="chatMenu">
          {" "}
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div
                onClick={() => {
                  setCurrentChat(c);
                }}
              >
                <Conversation conversation={c} currentUser={info} userInfo={info} />
              </div>
            ))}
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message messages={m} own={m.sender === info.id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMesageInput"
                    placeholder="write message"
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={newMessages}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>{" "}
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="onlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={info.id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
