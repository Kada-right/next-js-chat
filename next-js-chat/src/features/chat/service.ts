import { Db } from "@/db/instance";
import { messagesTable, fetchMessagesTable, usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    getAllMessages: async () => {
      return await db.select().from(messagesTable);
    },

    postMessage: async (message: string, userId: number) => {
      //zod valdiation::::. MÅSTE FIXA BTILL BIGINT eller så
      const timestamp = 15//Date.now();

      await db.insert(messagesTable).values({message, user_id: userId, timestamp});
    },

    postFetchedMessage: async(userId: string) => {
      //const timestamp = Date.now(); MÅSTE FIXA BTILL BIGINT eller så
      const timestamp = 15//Date.now();

      await db.insert(fetchMessagesTable).values({user_id: Number(userId), timestamp});
    },

    updateUserTokenById: async (token: number, userId: number) => {
      await db.update(usersTable).set({token}).where(eq(usersTable.id, userId));
    }
  };  
};
