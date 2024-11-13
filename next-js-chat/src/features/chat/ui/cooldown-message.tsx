
type CooldownMessageBoardProps = {
    cooldownMessage: {
      id: number;
      message: string;
      timestamp: number;
      user_id: number;    
    }
  }
  
  export async function CooldownMessage( { cooldownMessage } : CooldownMessageBoardProps ) {
  
    return (
      <>
      <p>COOLDOWN MESSAGE:</p>
      <p>TIMESTAMP: {cooldownMessage.timestamp}</p>  
      <p>USER ID: {cooldownMessage.user_id}</p>
      </>   
    );
  }