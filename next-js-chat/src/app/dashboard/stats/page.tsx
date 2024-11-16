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

  return {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch,
    validTimestamp,
  };
}

export default async function Page() {
  const {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch,
    validTimestamp,
  } = await getStats();

  return (
    <div className="h-screen bg-gradient-to-r from-gray-100 to-slate-500 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Leaderboard</h1>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            The user has written a total of {numberOfMessagesByUser} messages
          </span>{" "}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            As of{" "}
            {`${new Date(validTimestamp).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" })} on ${new Date(validTimestamp).toISOString().split("T")[0]}`}
            , <br /> {numberOfMessagesPerFetch} new message(s) were recorded
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">
            Of the new message(s) recorded {numberOfValidMessagesPerFetch} were
            valid
          </span>
        </p>
      </div>
    </div>
  );
}
