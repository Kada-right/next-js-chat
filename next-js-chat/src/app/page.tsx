import LoginWrapper from "@/features/chat/ui/login-wrapper";
import { Form } from "@/features/login/ui/login-page/form";
import { Heading } from "@/features/login/ui/login-page/heading";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-slate-500">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 border-t-4 border-r-4 border-slate-500 text-center">
        <Heading title="Welcome to the World`s Slowest Chat" />
        <p className="text-gray-600 text-lg mb-6">
          Where every message is worth the wait!
        </p>
        <Form />
        <LoginWrapper />
      </div>
    </div>
  );
}
