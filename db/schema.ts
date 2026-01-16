import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Example table - you can remove or modify this
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
    email: text('email'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    fileName: text('file_name').notNull(),
    filePath: text('file_path').notNull(),
    fileSize: text('file_size'),
    createdAt: timestamp('created_at').defaultNow(),
});
