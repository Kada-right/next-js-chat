import { createFeature } from "@/features/chat/feature";
import FetchMessageButton from "../../../ui/fetch-message-button";
import MessageBoard from "../../../ui/message-board";
import MessageInput from "../../../ui/message-input";

export default async function Page() {
  const messages = await createFeature().service.getAllMessages();

  return (
    <>
        <MessageInput /> 
      <div>
      <FetchMessageButton />
      <MessageBoard messages={messages} /> 
      </div> 
    </>
  );
}
