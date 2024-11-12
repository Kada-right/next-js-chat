import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { fetchMessagesTable, messagesTable, usersTable } from './schema';
import { eq, lte } from 'drizzle-orm';

export const createRepository = () => {
  const db = drizzle(process.env.DATABASE_URL!);

  return {
    getAllMessages: async () => {
      return await db.select().from(messagesTable);
    },

    getAllMessagesById: async (userId: string) => {
      return await db.select().from(messagesTable).where(eq(messagesTable.user_id, Number(userId)));
    },

    getAllMessagesByTimestamp: async (timestamp: number) => { 
      return await db.select() 
        .from(messagesTable) 
        .where(lte(messagesTable.timestamp, timestamp)); 
    },

    postMessage: async (message: unknown) => {
      await db.insert(messagesTable).values(message);
    },

    getAllUsers: async () => {
      return await db.select().from(usersTable);
    },

    addUser: async(username: string) => {
      await db.insert(usersTable).values(username);
    },

    postFetchedMessage: async(userId: string, timestamp: number) => {
      await db.insert(fetchMessagesTable).values({userId, timestamp});
    }
  }


}