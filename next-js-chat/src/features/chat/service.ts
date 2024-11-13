import { Db } from "@/db/instance";
import { messagesTable, fetchMessagesTable, usersTable } from "@/db/schema";
import { eq, lte } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    getAllMessages: async () => {
      return await db.select().from(messagesTable);
    },
    getAllMessagesByTimestamp: async (timestamp: number) => {
      return await db.select().from(messagesTable).where(lte(messagesTable.timestamp, timestamp));
    },
    postMessage: async (message: string, userId: number) => {
      //zod valdiation::::. MÅSTE FIXA BTILL BIGINT eller så
      const timestamp = 16//Date.now();

      await db.insert(messagesTable).values({message, user_id: userId, timestamp});
    },

    postFetchedMessage: async(userId: string) => {
      //const timestamp = Date.now(); MÅSTE FIXA BTILL BIGINT eller så
      const timestamp = 15//Date.now();

      await db.insert(fetchMessagesTable).values({user_id: Number(userId), timestamp});
    },
    getFetchedMessageTimestampById: async (userId: string) => {
      const [fetchedMessage] = await db.select().from(fetchMessagesTable).where(eq(fetchMessagesTable.user_id, Number(userId)));
      return fetchedMessage.timestamp;
    },

    updateUserTokenById: async (token: number, userId: number) => {
      await db.update(usersTable).set({token}).where(eq(usersTable.id, userId));
    }
  };  
};
