import dotenv from "dotenv";
import { dirname, join } from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { fileURLToPath } from "url";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "25060"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  logging: true,
  // Fix for entity path resolution
  entities: [join(dirname(__filename), "..", "entities", "*.{ts,js}")],
  migrations: [join(dirname(__filename), "..", "migrations", "*.{ts,js}")],
  subscribers: [],
});
