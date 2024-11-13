import Logout from "./logout";
import Stats from "./stats";

export default function TopNav() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Stats />
      <Logout />
    </div>
  );
}
