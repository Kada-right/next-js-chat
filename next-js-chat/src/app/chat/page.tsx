import { createFeature } from "@/features/chat/feature";
import FetchMessageButton from "../../../ui/fetch-message-button";
import Logout from "../../../ui/logout";
import MessageBoard from "../../../ui/message-board";
import MessageInput from "../../../ui/message-input";
import PostMessageButton from "../../../ui/post-message-button";
import Stats from "../../../ui/stats";

export default async function Page() {
  const messages = await createFeature().service.getAllMessages();

  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <MessageInput /> 
      </div>
      <div>
      <FetchMessageButton />
      <MessageBoard messages={messages} /> 
      </div> 
    </>
  );
}
