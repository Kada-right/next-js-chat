import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  token: integer().notNull(),
});

export const messagesTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: varchar({ length: 255 }).notNull(),
  timestamp: integer().notNull(),
  user_id: integer().notNull(),
});

export const fetchMessagesTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  timestamp: integer().notNull(),
  user_id: integer().notNull(),
});
