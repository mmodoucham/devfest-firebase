import { useState, useRef } from "react";
import { auth, db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const ChatInput = () => {
  const [newMessage, setNewMessage] = useState("");
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    if (!auth.currentUser) {
      alert("Not logged in");
      return;
    }
    e.preventDefault();

    if (image) {
      const storageRef = ref(storage, `images/${v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        (error) => {
          console.log(
            "There was an error uploading a file to Firebase Storage:",
            error
          );
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            addDoc(messagesRef, {
              message: downloadURL,
              createdAt: serverTimestamp(),
              user: {
                uid: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
              },
              type: "image",
            });
          });
          setImage(null);
          inputRef.current.value = "";
        }
      );
    }

    if (!newMessage) return;
    try {
      await addDoc(messagesRef, {
        message: newMessage,
        createdAt: serverTimestamp(),
        user: {
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        },
        type: "text",
      });
      setNewMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" p-4 flex items-center bg-gray-900">
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="file-input w-full max-w-xs rounded-none"
          placeholder="Image"
          ref={inputRef}
        />
        <div className="w-1"></div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Message"
          className="input  w-full rounded-none"
        />

        <button
          // onClick={handleSubmit}
          className="btn btn-square rounded-none w-[100px] bg-blue-500"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
