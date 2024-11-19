import RegularButton from "@/ui/design-system/buttons/regular-button";
import { postMessageAction } from "../../actions";

export async function Form() {
  return (
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
      <div className="pt-2 flex justify-center">
        <RegularButton name="Send message" />
      </div>
    </form>
  );
}
