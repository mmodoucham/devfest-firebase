import Chat from "../components/Chat";
import ChatInput from "../components/ChatInput";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <>
        <div className="h-screen flex flex-col  mx-auto">
          <Navbar />
          <div className="flex-1 overflow-y-auto p-4 bg-gray-800">
            <div className="flex flex-col space-y-2">
              <Chat />
            </div>
          </div>
          <ChatInput />
        </div>
      </>
    </>
  );
};

export default Home;
