import { chatService } from "../instance";

type CooldownMessageBoardProps = {
  cooldownMessage: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;
  };
};

export async function CooldownMessage({
  cooldownMessage,
}: CooldownMessageBoardProps) {
  const name = await chatService.getUserNameById(cooldownMessage.user_id);

  return (
    <>
      <p>Cooldown message:</p>
      <p>Date: {`${new Date(cooldownMessage.timestamp).toLocaleDateString()} ${new Date(cooldownMessage.timestamp).toLocaleTimeString()}`}</p>
      <p>Name: {name}</p>
    </>
  );
}
