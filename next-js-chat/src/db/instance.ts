import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
// Logga denna sen för att se hur många ggr den körs
export const db = drizzle(process.env.DATABASE_URL!);

export type Db = typeof db;
