"use server";

import { revalidatePath } from "next/cache";
import { chatService } from "./instance";

export async function postMessageAction(formData: FormData) {
  const message = formData.get("message") as string;

  const hardCodedUserId = 1;

  await chatService.postMessage(message, hardCodedUserId);
}

export async function postFetchMessageAction(userId: string) {
  const timestamp =
    await chatService.getLatestFetchedMessageTimestampById(userId);

  let tokens = await chatService.getTokensById(userId);

  tokens = chatService.getUserTokens(tokens, timestamp);

  if (!tokens) {
    throw new Error("No tokens left");
  }

  await chatService.updateUserTokenById(tokens, userId);

  await chatService.postFetchedMessage(userId);

  await chatService.decrementTokenById(userId, tokens);

  revalidatePath("/");
}
