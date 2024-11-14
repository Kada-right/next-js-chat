import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";
type CooldownMessages = {
  id: number;
  message: string;
  timestamp: number;
  user_id: number;
}[];

type validMessages = {
  id: number;
  timestamp: number;
  user_id: number;
  message: string;
}[];

export default async function Page() {
  const timestamp = await chatService.getLatestFetchedMessageTimestampById("1");

  let cooldownMessages: CooldownMessages = [];
  let validMessages: validMessages = [];

  if (timestamp) {
    cooldownMessages =
      await chatService.getAllMessagesByTimestampInCooldown(timestamp);
    validMessages =
      await chatService.getAllValidMessagesByTimestamp(timestamp);
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto  border-t-4 border-r-4 border-slate-500 rounded-lg mt-5">
      <div className="bg-gradient-to-r from-gray-100 to-slate-200 flex flex-col items-center w-full h-full">
        {
          timestamp &&
          <MessageBoard
            validMessage={validMessages}
            cooldownMessages={cooldownMessages}
          />
        }
        <MessageInput />
      </div>
    </div>
  );
}
