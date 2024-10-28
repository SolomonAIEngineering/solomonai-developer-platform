import { dirname, join } from "path";
import "reflect-metadata";
import { fileURLToPath } from "url";
import { AppDataSource } from "./data-source.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const testConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    const result = await AppDataSource.query("SELECT NOW()");
    console.log("Database time:", result[0].now);

    await AppDataSource.destroy();
    process.exit(0);
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
    process.exit(1);
  }
};

testConnection().catch((error) => {
  console.error(error);
  process.exit(1);
});
