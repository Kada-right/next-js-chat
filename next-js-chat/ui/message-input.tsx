import { postMessageAction } from "@/features/chat/actions";

export default function MessageInput() {
  return (
    <form action={postMessageAction} className="max-w-lg mx-auto p-6 bg-black shadow-lg rounded-lg">
    <div className="mb-4">
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
  );
}
