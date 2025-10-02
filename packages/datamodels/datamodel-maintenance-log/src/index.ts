import { drizzle } from 'drizzle-orm/bun-sql';

const db = drizzle("postgresql://postgres:postgres@localhost:5432");