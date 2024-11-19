import MessageInput from "@/features/chat/ui/chat-page/message-input";
import MessageBoard from "@/features/chat/ui/chat-page/message-board";

export async function ChatPage() {
  return (
    <div className="max-w-screen-lg mx-auto border-2 border-slate-500 rounded-lg">
      <MessageBoard />
      <MessageInput />
    </div>
  );
}
