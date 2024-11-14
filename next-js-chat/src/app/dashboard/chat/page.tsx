import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export default async function Page() {
  const timestamp = await chatService.getLatestFetchedMessageTimestampById("2");
  
  const cooldownMessages =
    await chatService.getAllMessagesByTimestampInCooldown(timestamp);
  
    const validMessages =
    await chatService.getAllValidMessagesByTimestamp(timestamp);

  return (
    <div className="w-full max-w-screen-lg mx-auto  border-t-4 border-r-4 border-slate-500 rounded-lg mt-5">
      <div className="bg-gradient-to-r from-gray-100 to-slate-200 flex flex-col items-center w-full h-full">
        <MessageBoard
          validMessage={validMessages}
          cooldownMessages={cooldownMessages}
        />      
        <MessageInput />
      </div>
    </div>
  );
}
