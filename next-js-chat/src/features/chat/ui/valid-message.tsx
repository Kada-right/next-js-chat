import { chatService } from "../instance";

type ValidMessageBoardProps = {
  validMessage: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;
  };
};

export async function ValidMessage({ validMessage }: ValidMessageBoardProps) {
  const name = await chatService.getUserNameById(validMessage.user_id);
  const timestamp = new Date(validMessage.timestamp);

  return (
    <>
      <p>Message: {validMessage.message}</p>
      <p>
        Date:{" "}
        {`${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`}
      </p>
      <p>Name: {name}</p>
    </>
  );
}
