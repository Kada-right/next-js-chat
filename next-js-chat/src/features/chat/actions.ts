'use server'

import { revalidatePath } from "next/cache";
import { chatService } from "./instance";
import { getTokens } from "@/utils/get-tokens";

export async function postMessageAction(formData: FormData) {
  console.log("Form data: ", formData);
  //validation skicka vidare objekt med rawData??

  const message = formData.get("message") as string;

  const hardCodedUserId = 1;

  await chatService.postMessage(message, hardCodedUserId);
} 

export async function postFetchMessageAction(userId: string) {
  const timestamp = 1231313;//await chatService.getFetchedMessageTimestampById(userId);

  let tokens = await chatService.getTokensById(userId);

  const timeNow = Date.now();

  tokens = getTokens(tokens, timestamp, timeNow);

  if (!tokens) {
    throw new Error("No tokens left");
  }

  await chatService.postFetchedMessage(userId);

  await chatService.decrementTokenById(userId, tokens);


  revalidatePath("/");
}

