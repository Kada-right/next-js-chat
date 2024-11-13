import FetchMessageButton from "../../features/chat/fetch-message-button";
//import MessageBoard from "../../../ui/message-board";
import MessageInput from "../../../ui/message-input";
import { chatService } from "@/features";

export default async function Page() {
  //const messages = await createFeature().service.getAllMessages(id); // KOLLa använders sneaste fetch-token och hämta message. 
  const timestamp = await chatService.getFetchedMessageTimestampById("1");
  const messages = await chatService.getAllMessagesByTimestamp(timestamp);
  console.log(messages);
  return (
    <>
        <MessageInput /> 
      <div>
      <FetchMessageButton />
{/*       <MessageBoard messages={messages} />  */}
      </div> 
    </>
  );
}