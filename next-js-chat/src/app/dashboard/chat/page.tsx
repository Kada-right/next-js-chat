import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export default async function Page() {
  const timestamp = await chatService.getLatestFetchedMessageTimestampById("1");
  const cooldownMessages =
    await chatService.getAllMessagesByTimestampInCooldown(timestamp);
  const validMessages =
    await chatService.getAllValidMessagesByTimestamp(timestamp);

  return (
    <div className="w-full max-w-screen-lg mx-auto border border-gray-300 rounded-lg mt-5">
      <div className="flex flex-col items-center w-full h-full">
        <MessageBoard
          validMessage={validMessages}
          cooldownMessages={cooldownMessages}
        />
        <MessageInput />
      </div>
    </div>
  );
}
