import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export default async function Page() {
  const timestamp = await chatService.getFetchedMessageTimestampById("1");
  const cooldownMessages = await chatService.getAllMessagesByTimestampInCooldown(timestamp);  
  const validMessages = await chatService.getAllValidMessagesByTimestamp(timestamp);
  return (
    <div className="flex flex-col items-center">
        <MessageBoard validMessage={validMessages} cooldownMessages={cooldownMessages} /> 

      <MessageInput /> 
    </div>
  );
}