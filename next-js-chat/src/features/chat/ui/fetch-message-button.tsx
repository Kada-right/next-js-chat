"use client"

import { postFetchMessageAction } from "../actions";

export default function FetchMessageButton() {
  const hardCodedUserId = "1";

  const postFetchMessageActionWithId = postFetchMessageAction.bind(null, hardCodedUserId);

  return <button onClick={postFetchMessageActionWithId}>Fetch message button</button>;
}