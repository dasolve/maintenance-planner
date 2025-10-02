import { drizzle } from 'drizzle-orm/bun-sql';

export const db = drizzle("postgresql://postgres:postgres@localhost:5432/maintenance_log");