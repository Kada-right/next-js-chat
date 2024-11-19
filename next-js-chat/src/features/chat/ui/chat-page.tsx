import MessageInput from "@/features/chat/ui/message-input";
import MessageBoard from "@/features/chat/ui/message-board";

export async function ChatPage() {
  return (
    <div className="w-full max-w-screen-lg mx-auto border-t-2 border-r-2 border-b-2 border-l-2 border-slate-500 rounded-lg shadow-lg">
          <MessageBoard />
        <MessageInput />
      </div>
  );
}
