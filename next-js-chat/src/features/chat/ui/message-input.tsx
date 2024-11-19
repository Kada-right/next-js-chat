import FetchMessageButton from "./fetch-message-button";
import { chatService } from "../instance";
import { Form } from "./form";

export default async function MessageInput() {
  const tokens = await chatService.getTokensById("1");

  return (
    <div className="w-full shadow-lg rounded-lg mt-0 p-5">
      <Form />
      <div className="pt-2 flex justify-center">
        <FetchMessageButton />
      </div>
      Tokens: {tokens}
    </div>
  );
}
