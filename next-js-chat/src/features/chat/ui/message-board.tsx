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
    <div className="h-64 overflow-y-auto flex flex-col items-center">
      {
        cooldownMessages.map(message => {
          return <CooldownMessage key={message.id} cooldownMessage={message}/>
        })
      }
            {
        validMessage.map(message => {
          return <ValidMessage key={message.id} validMessage={message} />
        })
      }
    </div>
  );
}