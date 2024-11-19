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
  const messageToShow = isValid
    ? `Message: ${sentMessage.message}`
    : "Cooldown message";

  return (
    <div className="mb-4 w-full px-4">
      <p>{messageToShow}</p>
      <p>
        Date:{" "}
        {`${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`}
      </p>
      <p>Name: {name}</p>
    </div>
  );
}
