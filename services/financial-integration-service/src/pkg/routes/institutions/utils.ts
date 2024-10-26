import { GoCardLessProvider } from "@/pkg/providers/gocardless/gocardless-provider";
import { PlaidProvider } from "@/pkg/providers/plaid/plaid-provider";
import { TellerProvider } from "@/pkg/providers/teller/teller-provider";
import type { ProviderParams } from "@/pkg/providers/types";

export async function getInstitutions(
  params: Omit<
    ProviderParams & { countryCode: string; storage: R2Bucket },
    "provider"
  >,
) {
  const { countryCode } = params;

  const gocardless = new GoCardLessProvider(params);
  const teller = new TellerProvider(params);
  const plaid = new PlaidProvider(params);

  const result = await Promise.all([
    teller.getInstitutions(),
    gocardless.getInstitutions({ countryCode }),
    plaid.getInstitutions({ countryCode }),
  ]);

  return result.flat();
}
