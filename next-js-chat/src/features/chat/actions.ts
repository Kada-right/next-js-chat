'use server'

import { revalidatePath } from "next/cache";
import { createFeature } from "./feature";

export async function postMessageAction(formData: FormData) {
  console.log("Form data: ", formData);
  //validation skicka vidare objekt med rawData??

  const message = formData.get("message") as string;

  const hardCodedUserId = 1;

  await createFeature().service.postMessage(message, hardCodedUserId);

  revalidatePath("/"); /// KOLLA PÅ!!!!
}

export async function postFetchedMessageAction(userId: string) {

  await createFeature().service.postFetchedMessage(userId);

  revalidatePath("/");

}

