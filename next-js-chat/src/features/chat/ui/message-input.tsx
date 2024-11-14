import { postMessageAction } from "@/features/chat/actions";
import FetchMessageButton from "./fetch-message-button";

export default function MessageInput() {
  return (
    <div className="w-full shadow-lg rounded-lg mt-0 p-5">
      <form action={postMessageAction}>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Meddelande:
          </label>
          <input
            type="text"
            id="message"
            name="message"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Skriv ditt meddelande här..."
          />
        </div>
        <button
          className="bg-fuchsia-700 mt-4 px-4 py-2 rounded-md text-white font-medium mx-auto block transition-transform transform hover:bg-fuchsia-900 hover:scale-105"
          type="submit"
        >
          Submit
        </button>
      </form>
      <FetchMessageButton />
    </div>
  );
}
