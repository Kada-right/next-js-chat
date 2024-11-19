"use client";

import { useRouter } from "next/navigation";
import RegularButton from "@/ui/design-system/buttons/regular-button";

export default function LoginButton() {
  const router = useRouter();

  const handleClick = async () => {
    router.push("/chat");
  };

  return (
    <div className="pt-4">
      <RegularButton name="Login" handleClick={handleClick} />
    </div>
  );
}
