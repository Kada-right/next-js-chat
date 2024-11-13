import { chatService } from "../instance";

type ValidMessageBoardProps = {
  validMessage: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;    
  }
}

export async function ValidMessage( { validMessage } : ValidMessageBoardProps ) {
  const name = await chatService.getUserNameById(validMessage.user_id);

  return (
    <>
    <p>MESSAGE: {validMessage.message}</p>
    <p>TIMESTAMP: {validMessage.timestamp}</p>
    <p>NAME: {name}</p>
    </>   
  );
}