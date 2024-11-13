import FetchMessageButton from "@/features/chat/ui/fetch-message-button";
import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export default async function Page() {
  const timestamp = await chatService.getFetchedMessageTimestampById("1");
  const messages = await chatService.getAllMessagesByTimestamp(timestamp);

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