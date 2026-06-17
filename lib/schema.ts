import { pgTable, serial, text, date, time } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  consultancy: text('consultancy').notNull(),
  whatsapp: text('whatsapp').notNull(),
  email: text('email').notNull(),
  q1: text('q1'),
  q2: text('q2'),
  q3: text('q3'),
  q4: text('q4'),
  selectedDate: date('selected_date'),
  selectedTime: time('selected_time'),
  createdAt: date('created_at').defaultNow(),
});
