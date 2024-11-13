import { createFeature } from "@/features/chat/feature";

export async function Message() {
  const messages = await createFeature().service.getAllMessages();
  return (
    <>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </>
  );
}