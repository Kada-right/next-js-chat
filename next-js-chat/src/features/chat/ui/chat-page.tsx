import { chatService } from "@/features";
import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export async function ChatPage() {

  const tokens = await chatService.getTokensById("1");

  return(
      <div className="w-full max-w-screen-lg mx-auto border-t-2 border-r-2 border-b-2 border-l-2 border-slate-500 rounded-lg shadow-lg">
        <div className="flex flex-col items-center w-full h-full">
          <div className="w-full h-96 overflow-y-auto">
            <MessageBoard/>
          </div>
          <MessageInput tokens={tokens} />
        </div>
      </div>
  );
}
