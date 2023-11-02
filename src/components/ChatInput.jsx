const ChatInput = () => {
  return (
    <div>
      <div className=" p-4 flex items-center bg-gray-900">
        <input
          type="file"
          className="file-input w-full max-w-xs rounded-none"
          placeholder="Image"
        />
        <div className="w-1"></div>
        <input
          type="text"
          placeholder="Message"
          className="input  w-full rounded-none"
        />

        <button className="btn btn-square rounded-none w-[100px] bg-blue-500">
          {" "}
          SEND
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
