type MessageProps = {
  message: {
    id: number;
    message: string;
    timestamp: number;
    user_id: number;
  }
};

export default function Message({ message }: MessageProps) {
  return (
    <>
      <p>{message.message}</p>
    </>
  );
}