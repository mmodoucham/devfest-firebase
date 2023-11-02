/* eslint-disable react-hooks/exhaustive-deps */
import Chat from "../components/Chat";
import ChatInput from "../components/ChatInput";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import useAuth from "../hooks/useAuth";
const Home = () => {
  const { isLoggedIn } = useAuth();
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const q = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setMessages(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <>
        <div className="h-screen flex flex-col  mx-auto">
          <Navbar />
          {!isLoggedIn ? (
            <h1 className="text-center text-xl font-bold">
              You must Login to Continue
            </h1>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 bg-gray-800">
                <div className="flex flex-col space-y-2">
                  <Chat messages={messages} />
                </div>
              </div>
              <ChatInput />
            </>
          )}
        </div>
      </>
    </>
  );
};

export default Home;
