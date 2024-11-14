import { chatService } from "@/features";

async function getMessagesPerFetch(fetchValid: boolean) {
  let timestamp = await chatService.getLatestFetchedMessageTimestampById("1");
  let penultimateTimestamp =
    await chatService.getPenultimateFetchedMessageTimestampById("1");

  if (fetchValid) {
    timestamp -= 1;
    penultimateTimestamp -= 1;
  }

  const penultimateMessages =
    await chatService.getAllMessagesByTimestamp(penultimateTimestamp);
  const latestMessages = await chatService.getAllMessagesByTimestamp(timestamp);
  const messagesPerFetch = latestMessages.length - penultimateMessages.length;

  return messagesPerFetch;
}

async function getStats() {
  const numberOfMessagesByUser =
    await chatService.getNumberOfMessagesByUserId("1");
  const numberOfValidMessagesPerFetch = await getMessagesPerFetch(true);
  const numberOfMessagesPerFetch = await getMessagesPerFetch(false);

  return {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch,
  };
}

export default async function Page() {
  const {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch,
  } = await getStats();

    return (
      <div className="h-screen bg-gradient-to-r from-gray-100 to-slate-500 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Leaderboard</h1>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Number of messages by user:</span> {numberOfMessagesByUser}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Number of messages by fetch:</span> {numberOfMessagesPerFetch}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Number of valid messages per fetch:</span> {numberOfValidMessagesPerFetch}
          </p>
        </div>
      </div>
    );
  }
