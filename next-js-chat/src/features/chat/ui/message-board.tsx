import { Message } from "./message";


type MessageBoardProps = {
  messages: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;    
  }[]
};

export default function MessageBoard({ messages }: MessageBoardProps) {
  return (
    <>
      {
        messages.map(message => {
          return <Message key={message.id} message={message.message} />
        })
      }
    </>
  );
}