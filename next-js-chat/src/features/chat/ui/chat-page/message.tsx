import { chatService } from "../../instance";

type Props = {
  sentMessage: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;
  };
  isValid: boolean;
};

export async function Message({ sentMessage, isValid }: Props) {
  const name = await chatService.getUserNameById(sentMessage.user_id);
  const timestamp = new Date(sentMessage.timestamp);
  const time = `${timestamp.toLocaleDateString()} ${timestamp.getHours().toString().padStart(2, "0")}:${timestamp.getMinutes().toString().padStart(2, "0")}`;
  const messageToShow = isValid
    ? `${sentMessage.message}`
    : "Cooldown message";

  return (
    <div className="chat chat-start ml-2">
    <div className="chat-header">
      {name} &nbsp;
    <time className="text-xs opacity-50">{time}</time>
  </div>
    <div className="chat-bubble mb-2">
      <p>{messageToShow}</p>
    </div>
    </div>
  );
}
