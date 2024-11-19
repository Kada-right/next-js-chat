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
    ? `Message: ${sentMessage.message}`
    : "Cooldown message";

  return (
    <div className="mb-4 w-full px-4">
      <p>{messageToShow}</p>
      <p>{time}</p>
      <p>Name: {name}</p>
    </div>
  );
}
