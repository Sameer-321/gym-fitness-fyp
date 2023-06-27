import "./messenger.css";
// import Topbar from "../../components/topbar/Topbar";
import { Conversation } from "../conversations/Conversation.jsx";
import { Message } from "../message/Message.jsx";
import { ChatOnline } from "../chatOnline/ChatOnline.jsx";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { isTrainerSubscriber } from "../../../features/TrainerSubscription/trainerSubSlice";

import { useNavigate } from "react-router-dom";
export function Messenger(props) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const [newMessages, setNewMessages] = useState("");
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  const nav = useNavigate();
  const { info } = props;
  const { isLoggedIn } = props.info;
  // console.log(info.role, 21111111111111111);
  const scrollRef = useRef();

  //State for Role-Based-Auth
  const sub_status = useSelector(isTrainerSubscriber);

  const [subStatus, setSubStatus] = useState(false);

  useEffect(() => {
    setSubStatus(sub_status);
  }, [sub_status]);
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
    // socket.current.on("getUsers", (users) => {
    //   setOnlineUsers(
    //     info.followings.filter((f) => users.some((u) => u.userId === f))
    //   );
    // });
  }, [info]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/conversations/" + info.id
        );
        setConversations(res.data);
        // console.log(res.data);
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
        const res = await axios.get(
          "http://localhost:5000/api/v1/messages/" + currentChat?._id
        );
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
    const receiverId = currentChat.members.find((member) => member !== info.id);
    socket.current.emit("sendMessage", {
      senderId: info.id,
      receiverId,
      text: newMessages,
    });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {subStatus || info.role === "trainer" ? (
        <div className="messenger  mt-[10%]  ml-[12%] mr-auto">
          <div className="chatMenu bg-gray-200 ">
            {" "}
            <div className="chatMenuWrapper  ml-[45px] max-w-full">
              {/* <input placeholder="Search for friends" className="chatMenuInput" /> */}
              {conversations.map((c) => (
                <div
                  onClick={() => {
                    setCurrentChat(c);
                  }}
                >
                  <Conversation
                    conversation={c}
                    currentUser={info}
                    userInfo={info}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="chatBox">
            <div className="flex justify-center text-lg font-semibold bg-gray-300 w-[100%]">
              chat
            </div>
            <div className="chatBoxWrapper">
              {currentChat ? (
                <div>
                  <div className="chatBoxTop">
                    {messages.map((m) => (
                      <div ref={scrollRef}>
                        <Message messages={m} own={m.sender === info.id} />
                      </div>
                    ))}
                  </div>
                  <div className="chatBoxBottom w-full mx-auto">
                    <textarea
                      className="chatMesageInput w-4/5 "
                      placeholder="write message"
                      onChange={(e) => setNewMessages(e.target.value)}
                      value={newMessages}
                    ></textarea>
                    <button
                      className="chatSubmitButton w-1/5"
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>{" "}
                </div>
              ) : (
                <span className="noConversationText">
                  Open a conversation to start a chat
                </span>
              )}
            </div>
          </div>
          {/* <div className="chatOnline">
      <div className="onlineWrapper">
        <ChatOnline
          onlineUsers={onlineUsers}
          currentId={info.id}
          setCurrentChat={setCurrentChat}
        />
      </div>
    </div> */}
        </div>
      ) : !subStatus || !info.role === "trainer" ? (
        <div className="container my-[120px] mx-auto w-3/5  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get Online Personal Trainer
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Please get a Trainer Subscription for unlocking online training
            features
          </p>
          <div
            onClick={() => {
              nav("/trainers");
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Now
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
}
