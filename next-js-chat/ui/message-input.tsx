import { postMessageAction } from "@/features/chat/actions";

export default function MessageInput() {
  return (
    <form action={postMessageAction} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
        Meddelande:
      </label>
      <input
        type="text"
        id="message"
        name="message"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Skriv ditt meddelande här..."
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Skicka
    </button>
  </form>
  );
}
