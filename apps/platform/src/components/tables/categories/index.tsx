import { getCategories } from "@v1/db/cached-queries";
import { DataTable } from "./table";

export async function CategoriesTable() {
  const categories = await getCategories();

  return <DataTable data={categories?.data} />;
}
