"use client";

import { postFetchMessageAction } from "../actions";

export default function FetchMessageButton() {
  const hardCodedUserId = "1";

  const postFetchMessageActionWithId = postFetchMessageAction.bind(
    null,
    hardCodedUserId,
  );

  return (
    <button
      onClick={postFetchMessageActionWithId}
      className="bg-slate-500 mt-4 px-4 py-2 rounded-md text-white font-medium mx-auto block transition-transform transform hover:bg-slate-700 hover:scale-105"
    >
      Fetch message button
    </button>
  );
}
