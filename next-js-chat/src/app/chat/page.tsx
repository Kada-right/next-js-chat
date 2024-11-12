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
      <Logout />
      <Stats />
      <div>
        <MessageInput /> 
        <PostMessageButton />
      </div>
      <FetchMessageButton />
      <MessageBoard messages={messages} />   
    </>
  );
}
