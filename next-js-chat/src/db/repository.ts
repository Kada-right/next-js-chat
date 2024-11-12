import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { messagesTable, usersTable } from './schema';
import { eq } from 'drizzle-orm';

export const createRepository = () => {
  const db = drizzle(process.env.DATABASE_URL!);

  return {
    getAllMessages: async () => {
      return await db.select().from(messagesTable);
    },

    getAllMessagesById: async (userId: string) => {
      return await db.select().from(messagesTable).where(eq(messagesTable.user_id, Number(userId)));
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


  }


}