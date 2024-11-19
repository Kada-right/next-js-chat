"use client";

import { useRouter } from "next/navigation";
import RegularButton from "@/ui/design-system/buttons/regular-button";

export default function LoginWrapper() {
  const router = useRouter();

  const handleClick = async () => {
    router.push("/chat");
  };

  return <RegularButton name="Login" handleClick={handleClick} />;
}
