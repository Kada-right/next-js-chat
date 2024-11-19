import { chatService } from "../instance";
import { Message } from "./message";

export default async function MessageBoard() {

  const timestamp = await chatService.getLatestFetchedMessageTimestampById("1");

  const cooldownMessages = await chatService.getAllMessagesByTimestampInCooldown(timestamp);

  const validMessage = await chatService.getAllValidMessagesByTimestamp(timestamp);

  return (
    <>
      {cooldownMessages.map((message) => (
        <div key={message.id} className="mb-4 w-full px-4">
          <Message sentMessage={message} isValid={false} />
        </div>
      ))}
      {validMessage.map((message) => (
        <div key={message.id} className="mb-4 w-full px-4">
          <Message sentMessage={message} isValid={true} />
        </div>
      ))}
    </>
  );
}
