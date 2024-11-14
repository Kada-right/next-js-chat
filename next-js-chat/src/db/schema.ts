import { bigint, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  token: integer().notNull(),
});

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  message: varchar({ length: 255 }).notNull(),
  timestamp: bigint('timestamp', { mode: 'number' }).notNull(),
  user_id: integer().notNull(),
});

export const fetchMessagesTable = pgTable("fetched_messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  timestamp: bigint('timestamp', { mode: 'number' }).notNull(),
  user_id: integer().notNull(),
});
