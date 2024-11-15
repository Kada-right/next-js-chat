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
  const timestamp = new Date(cooldownMessage.timestamp);
  

  return (
    <>
      <p>Cooldown message:</p>
      <p>
        Date:{" "}
        {`${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`}
      </p>
      <p>Name: {name}</p>
    </>
  );
}
