export type MessageBoardProps = {
    cooldownMessages: {
      id: number;
      message: string;
      timestamp: number;
      user_id: number;
    }[];
    validMessage: {
      id: number;
      message: string;
      timestamp: number;
      user_id: number;
    }[];
  };