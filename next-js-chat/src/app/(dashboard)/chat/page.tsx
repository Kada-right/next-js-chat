import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export default async function Page() {
  const timestamp = await chatService.getLatestFetchedMessageTimestampById("1");

  const tokens = await chatService.getTokensById("1");

  const cooldownMessages =
    await chatService.getAllMessagesByTimestampInCooldown(timestamp);

  const validMessages =
    await chatService.getAllValidMessagesByTimestamp(timestamp);

  return (
    <div className="h-screen bg-gradient-to-r from-gray-100 to-slate-500 flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto border-t-2 border-r-2 border-b-2 border-l-2 border-slate-500 rounded-lg shadow-lg">
        <div className="flex flex-col items-center w-full h-full">
          <div className="w-full h-96 overflow-y-auto">
            <MessageBoard
              validMessage={validMessages}
              cooldownMessages={cooldownMessages}
            />
          </div>
          <MessageInput tokens={tokens} />
        </div>
      </div>
    </div>
  );
}
