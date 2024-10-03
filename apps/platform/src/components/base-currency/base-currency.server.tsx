import { getTeamSettings } from "@v1/db/cached-queries";
import { SelectCurrency } from "./select-currency";

export async function BaseCurrencyServer() {
  const { data } = await getTeamSettings();

  return <SelectCurrency defaultValue={data?.base_currency} />;
}
