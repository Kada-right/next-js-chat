import { chatService } from "@/features";

async function getMessagesPerFetch(fetchValid: boolean) {
  let timestamp = await chatService.getLatestFetchedMessageTimestampById("1");
  let penultimateTimestamp = await chatService.getPenultimateFetchedMessageTimestampById("1");

  if (fetchValid) {
      timestamp -= 1;
      penultimateTimestamp -= 1;
  }

  const penultimateMessages = await chatService.getAllMessagesByTimestamp(penultimateTimestamp);
  const latestMessages = await chatService.getAllMessagesByTimestamp(timestamp);
  const messagesPerFetch = latestMessages.length - penultimateMessages.length;

  return messagesPerFetch;
}

async function getStats() {
  const numberOfMessagesByUser = await chatService.getNumberOfMessagesByUserId("1");
  const numberOfValidMessagesPerFetch = await getMessagesPerFetch(true);
  const numberOfMessagesPerFetch = await getMessagesPerFetch(false);

  return {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch
  };
}

export default async function Page() {
  const {
    numberOfMessagesByUser,
    numberOfValidMessagesPerFetch,
    numberOfMessagesPerFetch
  } = await getStats();   

  return (
    <>
      <h1>Leaderboard</h1>
      <p>Number of messages by user: {numberOfMessagesByUser}</p>
      <p>Number of messages by fetch: {numberOfMessagesPerFetch}</p>
      <p>Number of valid messages per fetch: {numberOfValidMessagesPerFetch}</p>      
    </>
  );
}