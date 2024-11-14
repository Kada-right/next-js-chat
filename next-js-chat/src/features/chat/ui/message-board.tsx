import { CooldownMessage } from "./cooldown-message";
import { ValidMessage } from "./valid-message";

type MessageBoardProps = {
  cooldownMessages: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;    
  }[],
  validMessage: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;
  }[]
};

export default function MessageBoard({ validMessage, cooldownMessages }: MessageBoardProps) {
  return (
    <div className="rounded-lg w-full h-96 overflow-y-auto flex flex-col items-center pt-4">
      {cooldownMessages.map((message) => (
        <div key={message.id} className="mb-4 w-full px-4">
          <CooldownMessage cooldownMessage={message} />
        </div>
      ))}
      {validMessage.map((message) => (
        <div key={message.id} className="mb-4 w-full px-4">
          <ValidMessage validMessage={message} />
        </div>
      ))}
    </div>
  );
}
