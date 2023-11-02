const Chat = () => {
  return (
    <div>
      <div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </div>
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </div>
          <div className="chat-header">Anakin</div>
          <div className="chat-bubble">
            <img
              src="https://www.html.am/images/html-codes/links/boracay-resort-1000x750.jpg"
              className="w-[300px]"
              alt=""
            />
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
