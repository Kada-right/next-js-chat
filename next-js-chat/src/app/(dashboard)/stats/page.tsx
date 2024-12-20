import { chatService } from "@/features";

async function getMessagesPerFetch(fetchValid: boolean) {
  let timestamp = await chatService.getLatestFetchedMessageTimestampById("1");
  let penultimateTimestamp =
    await chatService.getPenultimateFetchedMessageTimestampById("1");

  if (fetchValid) {
    timestamp -= 1000 * 60;
    penultimateTimestamp -= 1000 * 60;
  }

  const penultimateMessages =
    await chatService.getAllMessagesByTimestamp(penultimateTimestamp);
  const latestMessages = await chatService.getAllMessagesByTimestamp(timestamp);
  const messagesPerFetch = latestMessages.length - penultimateMessages.length;

  return { messagesPerFetch, timestamp };
}

async function getStats() {
  const numberOfMessagesByUser =
    await chatService.getNumberOfMessagesByUserId("1");
  const data = await getMessagesPerFetch(true);
  const numberOfValidMessagesPerFetch = data.messagesPerFetch;
  const validTimestamp = data.timestamp;
  const numberOfMessagesPerFetch = (await getMessagesPerFetch(false))
    .messagesPerFetch;

  const numberOfFetchedMessagesByUser =
    await chatService.getNumberOfFetchedMessagesByUserId("1");
  const numberOfWrittenMessages = (await chatService.getAllMessages()).length;
  const averageFetchedMessages =
    numberOfWrittenMessages / numberOfFetchedMessagesByUser;

  return {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch,
    validTimestamp,
    averageFetchedMessages,
    numberOfFetchedMessagesByUser,
  };
}

export default async function Page() {
  const {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch,
    validTimestamp,
    averageFetchedMessages,
    numberOfFetchedMessagesByUser,
  } = await getStats();

  const messagesTextUser =
    numberOfMessagesByUser > 1 || numberOfMessagesByUser === 0
      ? "messages"
      : "message";
  const messagesTextFetch =
    numberOfMessagesPerFetch > 1 || numberOfMessagesPerFetch === 0
      ? "messages"
      : "message";
  const messagesTextAverage =
    averageFetchedMessages > 1 || averageFetchedMessages === 0
      ? "messages"
      : "message";
  const wasWereTextAverage =
    averageFetchedMessages > 1 || averageFetchedMessages === 0 ? "were" : "was";
  const wasWereTextFetch =
    numberOfMessagesPerFetch > 1 || numberOfMessagesPerFetch === 0
      ? "were"
      : "was";
  const wasWereTextValid =
    numberOfValidMessagesPerFetch > 1 || numberOfValidMessagesPerFetch === 0
      ? "were"
      : "was";

  return (
    <div className="pt-20">
      <div className="max-w-md mx-auto bg-white p-6 border-2 border-slate-500 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Leaderboard</h1>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            The user has written a total of,
            <br /> {numberOfMessagesByUser} {messagesTextUser}.
          </span>{" "}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            The user has fetched a total of,
            <br /> {numberOfFetchedMessagesByUser} {messagesTextAverage}.
          </span>{" "}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            In average {Math.round(averageFetchedMessages)}{" "}
            {messagesTextAverage} {wasWereTextAverage} fetched.
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            As of{" "}
            {`${new Date(validTimestamp).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" })} on ${new Date(validTimestamp).toISOString().split("T")[0]}`}
            , <br /> {numberOfMessagesPerFetch} new {messagesTextFetch}{" "}
            {wasWereTextFetch} recorded.
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            Of the new {messagesTextFetch} recorded,
            <br /> {numberOfValidMessagesPerFetch} {wasWereTextValid} not on
            cooldown.
          </span>
        </p>
      </div>
    </div>
  );
}
