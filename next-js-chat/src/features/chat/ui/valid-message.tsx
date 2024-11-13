
type ValidMessageBoardProps = {
  validMessage: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;    
  }
}

export async function ValidMessage( { validMessage } : ValidMessageBoardProps ) {

  return (
    <>
    <p>MESSAGE: {validMessage.message}</p>
    <p>TIMESTAMP: {validMessage.timestamp}</p>
    <p>USER ID: {validMessage.user_id}</p>
    </>   
  );
}