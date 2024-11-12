import { db } from "@/db/instance"
import { createService } from "./service"

export const createFeature = () => {
  const service = createService(db);

  return {
    service
  };
};
