'use server'

import { revalidatePath } from "next/cache";
import { chatService } from "./instance";

export async function postMessageAction(formData: FormData) {
  console.log("Form data: ", formData);
  //validation skicka vidare objekt med rawData??

  const message = formData.get("message") as string;

  const hardCodedUserId = 1;

  await chatService.postMessage(message, hardCodedUserId);
} 

export async function postFetchMessageAction(userId: string) {
  const token = await chatService.getTokensById(userId);

  if (!token) {
    throw new Error("No tokens left");
  }

  await chatService.postFetchedMessage(userId);

  await chatService.decrementTokenById(userId, token);


  revalidatePath("/");
}

