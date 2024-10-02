import type { Result } from '@internal/error'

import { Err, Ok, SchemaError } from '@internal/error'
import { z } from 'zod'

export const billingTier = z.object({
  firstUnit: z.number().int().min(1),
  lastUnit: z.number().int().min(1).nullable(),
  /**
   * in cents, e.g. "10.124" = $0.10124
   * set null, to make it free
   */
  centsPerUnit: z
    .string()
    .regex(/^\d{1,15}(\.\d{1,12})?$/)
    .nullable(),
})

export type BillingTier = z.infer<typeof billingTier>

type TieredPrice = {
  tiers: (BillingTier & { quantity: number })[]

  /**
   * Here be dragons.
   *
   * DO NOT USE FOR BILLING
   *
   * We're doing floating point operations here, so the result is likely not exact.
   * Use this only for displaying estimates to the user.
   */
  totalCentsEstimate: number
}
/**
 * calculateTieredPrice calculates the price for a given number of units, based on a tiered pricing model.
 *
 */
/**
 * Calculates the price for a given number of units based on a tiered pricing model.
 *
 * @param rawTiers - An array of BillingTier objects representing the pricing tiers.
 * @param units - The number of units to calculate the price for.
 *
 * @returns A Result containing either:
 *   - Ok: A TieredPrice object with calculated tiers and estimated total price.
 *   - Err: A SchemaError if the input tiers are invalid.
 *
 * @throws {SchemaError} When:
 *   - The rawTiers array is empty.
 *   - Any tier except the last one doesn't have a lastUnit.
 *   - There are gaps or overlaps between tiers.
 *
 * @remarks
 * This function performs two main steps:
 * 1. Validation: Ensures the input tiers are valid and properly structured.
 * 2. Calculation: Computes the price based on the given units and tier structure.
 *
 * The returned TieredPrice object includes:
 * - tiers: An array of the applied tiers with their respective quantities.
 * - totalCentsEstimate: An estimate of the total price in cents.
 *
 * Note: The totalCentsEstimate is not suitable for actual billing due to potential
 * floating-point inaccuracies. It should only be used for displaying estimates to users.
 *
 * @example
 * ```typescript
 * const tiers = [
 *   { firstUnit: 1, lastUnit: 100, centsPerUnit: "10" },
 *   { firstUnit: 101, lastUnit: null, centsPerUnit: "5" }
 * ];
 * const result = calculateTieredPrices(tiers, 150);
 * if (result.ok) {
 *   console.log(result.value.totalCentsEstimate); // 1250
 * }
 * ```
 */
export function calculateTieredPrices(
  rawTiers: BillingTier[],
  units: number,
): Result<TieredPrice, SchemaError> {
  /**
   * Validation logic:
   */
  const parsedTiers = billingTier.array().min(1).safeParse(rawTiers)
  if (!parsedTiers.success) {
    return Err(SchemaError.fromZod(parsedTiers.error, rawTiers))
  }
  const tiers = parsedTiers.data

  for (let i = 0; i < tiers.length; i++) {
    if (i > 0) {
      const currentTier = tiers[i]
      const previousTier = tiers[i - 1]

      if (currentTier?.firstUnit === undefined) {
        return Err(
          new SchemaError({
            message: `firstUnit is undefined for tier ${i}`,
          }),
        )
      }

      if (previousTier?.lastUnit === undefined) {
        return Err(
          new SchemaError({
            message: `lastUnit is undefined for tier ${i - 1}`,
          }),
        )
      }

      if (previousTier.lastUnit === null) {
        return Err(
          new SchemaError({
            message: 'Every tier except the last one must have a lastUnit',
          }),
        )
      }

      if (currentTier.firstUnit > previousTier.lastUnit + 1) {
        return Err(new SchemaError({ message: 'There is a gap between tiers' }))
      }
      if (currentTier.firstUnit < previousTier.lastUnit + 1) {
        return Err(
          new SchemaError({ message: 'There is an overlap between tiers' }),
        )
      }
    }
  }

  /**
   * Calculation logic:
   */
  let remaining = units // make a copy, so we don't mutate the original
  const res: TieredPrice = { tiers: [], totalCentsEstimate: 0 }
  for (const tier of tiers) {
    if (remaining <= 0) {
      break
    }

    if (tier.firstUnit === undefined) {
      return Err(
        new SchemaError({
          message: 'firstUnit must be defined for all tiers',
        }),
      )
    }

    const quantity =
      tier.lastUnit === null
        ? remaining
        : Math.min(tier.lastUnit - tier.firstUnit + 1, remaining)
    remaining -= quantity
    res.tiers.push({ quantity, ...tier })
    if (tier.centsPerUnit !== undefined) {
      res.totalCentsEstimate += quantity * Number(tier.centsPerUnit)
    }
  }

  return Ok(res)
}
