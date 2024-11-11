import FetchMessageButton from "../../../ui/fetch-message-button";
import Logout from "../../../ui/logout";
import MessageBoard from "../../../ui/message-board";
import MessageInput from "../../../ui/message-input";
import PostMessageButton from "../../../ui/post-message-button";
import Stats from "../../../ui/stats";

export default function Page() {
  return (
    <>
      <Logout />
      <Stats />
      <div>
        <MessageInput /> 
        <PostMessageButton />
      </div>
      <FetchMessageButton />
      <MessageBoard />   
    </>
  );
}
