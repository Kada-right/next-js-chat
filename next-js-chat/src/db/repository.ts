import { fetchMessagesTable, messagesTable, usersTable } from './schema';
import { eq, lte } from 'drizzle-orm';
import { Db, } from './instance';

export const createRepository = (db: Db) => {




  return {
    getAllMessages: async () => {
      return await db.select().from(messagesTable);
    },

    getAllMessagesById: async (userId: number) => {
      return await db.select().from(messagesTable).where(eq(messagesTable.user_id, userId));
    },

    getAllMessagesByTimestamp: async (timestamp: number) => { 
      return await db.select() 
        .from(messagesTable) 
        .where(lte(messagesTable.timestamp, timestamp)); 
    },

    postMessage: async (message: string, userId: number, timestamp: number) => {
      await db.insert(messagesTable).values({message, user_id: userId, timestamp});
    },

    getAllUsers: async () => {
      return await db.select().from(usersTable);
    },

    addUser: async(username: string) => {
      await db.insert(usersTable).values({username, token: 3});
    },

    getUserById: async (userId: number) => {
      return await db.select().from(usersTable).where(eq(usersTable.id, userId));
    },

    postFetchedMessage: async(userId: number, timestamp: number) => {
      await db.insert(fetchMessagesTable).values({user_id: userId, timestamp});
    },

    updateUserTokenById: async (token: number, userId: number) => {
      await db.update(usersTable).set({token}).where(eq(usersTable.id, userId));
    }
  }
}
