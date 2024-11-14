import { postMessageAction } from "@/features/chat/actions";
import FetchMessageButton from "./fetch-message-button";

export default function MessageInput() {
  return (
    <div className="max-w-lg bg-black shadow-lg rounded-lg mt-5">
    <form action={postMessageAction}>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
        Meddelande:
      </label>
      <input
        type="text"
        id="message"
        name="message"
        required
        className="block text-sm font-medium text-gray-700 mb-2"
        placeholder="Skriv ditt meddelande här..."
      />
    </div>
    <button
      type="submit"
    >
      Skicka
    </button>
  </form>
    <FetchMessageButton />
    </div>
  );
}
