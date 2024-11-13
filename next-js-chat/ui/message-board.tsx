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
        messages.map((message, index) => {
          return <Message key={index} message={message} />
        })
      }
    </>
  );
}