import { chatService } from "@/features";

async function getMessagesPerFetch(fetchValid: boolean) {

  let timestamp = await chatService.getLatestFetchedMessageTimestampById("1");
  let penultimateTimestamp = await chatService.getPenultimateFetchedMessageTimestampById("1");


  if(fetchValid) {
      timestamp -= 1;
      penultimateTimestamp -= 1;
  }

  const penultimateMessages = await chatService.getAllMessagesByTimestamp(penultimateTimestamp);
  const latestMessages = await chatService.getAllMessagesByTimestamp(timestamp);
  const messagesPerFetch = latestMessages.length - penultimateMessages.length;
  return messagesPerFetch;
}


export default async function Page() {
  const messagesPerFetch = await getMessagesPerFetch(true);

  console.log(messagesPerFetch)

  return (
    <>
    <p>Leaderboard</p>
    </>
  );
}