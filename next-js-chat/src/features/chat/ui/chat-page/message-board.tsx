import { chatService } from "../../instance";
import { Message } from "./message";

export default async function MessageBoard() {
  const timestamp = await chatService.getLatestFetchedMessageTimestampById("1");

  const cooldownMessages =
    await chatService.getAllMessagesByTimestampInCooldown(timestamp);

  const validMessage =
    await chatService.getAllValidMessagesByTimestamp(timestamp);

  return (
    <div className="h-96 overflow-y-auto pt-2">
      {cooldownMessages.map((message) => (
        <Message key={message.id} sentMessage={message} isValid={false} />
      ))}
      {validMessage.map((message) => (
        <Message key={message.id} sentMessage={message} isValid={true} />
      ))}
    </div>
  );
}
