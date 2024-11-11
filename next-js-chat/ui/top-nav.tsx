import Logout from "./logout";
import Stats from "./stats";

export default function TopNav() {
  return (
    <>
      <div>
        <Stats />
        <Logout />
      </div> 
    </>
  );
}