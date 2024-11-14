import { Db } from "@/db/instance";
import { messagesTable, fetchMessagesTable, usersTable } from "@/db/schema";
import { getTokens } from "@/utils/get-tokens";
import { desc, eq, gte, lte } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    getAllMessages: async () => {
      return await db.select().from(messagesTable);
    },
    
    getAllMessagesByUserId: async (userId: string) => {
      const messages = await db.select().from(messagesTable).where(eq(messagesTable.user_id, Number(userId)))
      return messages.length;

    },

    getAllMessagesByTimestamp: async (timestamp: number) => {
      return await db.select().from(messagesTable).where(lte(messagesTable.timestamp, timestamp));
    },

    getAllMessagesByTimestampInCooldown: async (timestamp: number) => {
      const cooldownTimestamp = timestamp - 1;
      return await db.select().from(messagesTable).where(gte(messagesTable.timestamp, cooldownTimestamp));
    },

    getAllValidMessagesByTimestamp: async (timestamp: number) => {
      const validTimestamp = timestamp - 1;
      return await db.select().from(messagesTable).where(lte(messagesTable.timestamp, validTimestamp));
    },

    getUserNameById: async (userId: number) => {
      const user = await db.select().from(usersTable).where(eq(usersTable.id, Number(userId)));
      return user[0].username;
    },

    postMessage: async (message: string, userId: number) => {
      //zod valdiation::::. MÅSTE FIXA BTILL BIGINT eller så
      const timestamp = 23//Date.now();

      await db.insert(messagesTable).values({message, user_id: userId, timestamp});
    },

    postFetchedMessage: async(userId: string) => {
      //const timestamp = Date.now(); MÅSTE FIXA BTILL BIGINT eller så
      const timestamp = 23//Date.now();

      await db.insert(fetchMessagesTable).values({user_id: Number(userId), timestamp});
    },
    getLatestFetchedMessageTimestampById: async (userId: string) => {
      const [fetchedMessage] = await db
        .select()
        .from(fetchMessagesTable)
        .where(eq(fetchMessagesTable.user_id, Number(userId)))
        .orderBy(desc(fetchMessagesTable.timestamp))
        .limit(1);
      return fetchedMessage.timestamp;
    },

    getPenultimateFetchedMessageTimestampById: async (userId: string) => {
      const fetchedMessage = await db
        .select()
        .from(fetchMessagesTable)
        .where(eq(fetchMessagesTable.user_id, Number(userId)))
        .orderBy(desc(fetchMessagesTable.timestamp))
        if(fetchedMessage.length <= 1) {
          throw new Error("Array to short")
        }
      return fetchedMessage[1].timestamp;
    },


    updateUserTokenById: async (token: number, userId: number) => {
      await db.update(usersTable).set({token}).where(eq(usersTable.id, userId));
    },

    getTokensById: async (userId: string) => {
      const data = await db.select().from(usersTable).where(eq(usersTable.id, Number(userId)));
      return data[0].token;
    },

    decrementTokenById: async (userId: string, token: number) => {
      const newToken = token - 1;
      await db.update(usersTable).set({ token: newToken}).where(eq(usersTable.id, Number(userId)));
    },

    getUserTokens: (tokens: number, timestamp: number) => {
      const timeNow = Date.now();

      return getTokens(tokens, timestamp, timeNow);
    },
  };  
};
