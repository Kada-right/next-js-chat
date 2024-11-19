import { Form } from "./form";
import { Heading } from "./heading";
import LoginButton from "./login-button";
import { Slogan } from "./slogan";

export function LoginWindow() {
  return (
    <div className="max-w-lg bg-white rounded-lg p-8 text-center border-2 border-slate-300">
      <Heading title={`Welcome to the world's slowest chat`} />
      <Slogan text="Where every message is worth the wait." />
      <Form />
      <LoginButton />
    </div>
  );
}
