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
      <p>COOLDOWN MESSAGE:</p>
      <p>TIMESTAMP: {cooldownMessage.timestamp}</p>
      <p>NAME: {name}</p>
    </>
  );
}
