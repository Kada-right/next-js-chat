"use client"

import { postFetchMessageAction } from "@/features/chat/actions"; //Fråga import

export default function FetchMessageButton() {
  const hardCodedUserId = "8";

  const postFetchMessageActionWithId = postFetchMessageAction.bind(null, hardCodedUserId);

  return <button onClick={postFetchMessageActionWithId}>Fetch message button</button>;
}