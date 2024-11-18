"use client";

import RegularButton from "@/ui/design-system/buttons/regular-button";
import { postFetchMessageAction } from "../actions";

export default function FetchMessageButton() {
  const hardCodedUserId = "1";

  const postFetchMessageActionWithId = postFetchMessageAction.bind(
    null,
    hardCodedUserId,
  );

  return (
    <RegularButton name="Fetch message" handleClick={postFetchMessageActionWithId}/>
  );
}
