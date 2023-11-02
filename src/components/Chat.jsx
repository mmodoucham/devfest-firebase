import { auth } from "../firebase";
const Chat = ({ messages }) => {
  return (
    <div>
      <div>
        {messages.map((message) => (
          <div
            className={
              message.user.uid == auth.currentUser.uid
                ? `chat chat-end`
                : `chat chat-start`
            }
            key={message.id}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src={message.user.photoURL}
                  referrerPolicy="no-referrer"
                  className="w-10 rounded-full"
                  alt="user avatar"
                />
              </div>
            </div>
            <div className="chat-header">{message.user.displayName}</div>
            <div className="chat-bubble">
              {message.type == "text" ? (
                message.message
              ) : (
                <img src={message.message} className="w-[300px]" alt="" />
              )}
            </div>
            <div className="chat-footer opacity-50">
              {new Date(message.createdAt?.toDate()).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
