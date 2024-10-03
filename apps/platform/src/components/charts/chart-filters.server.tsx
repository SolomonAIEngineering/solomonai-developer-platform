import { getBankAccountsCurrencies } from "@v1/db/cached-queries";
import { Suspense } from "react";
import { ChartFilters } from "./chart-filters";

export async function ChartFiltersServer() {
  const currencies = await getBankAccountsCurrencies();

  return (
    <Suspense>
      <ChartFilters
        currencies={
          currencies?.data?.map((currency) => {
            return {
              id: currency.currency,
              name: currency.currency,
            };
          }) ?? []
        }
      />
    </Suspense>
  );
}
