"use server";

import { getErrorMessage } from "@/lib/helpers/error-message";
import { and, desc, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db, Lead } from "../db";
import { endpoints, leads } from "../db/schema";
import { authenticatedAction } from "./safe-action";
import { getLeadDataSchema } from "./validations";

/**
 * Creates a new lead in the database
 *
 * Helper function used in dynamic route for creating a new lead
 * User does not need to be authenticated for this to happen
 */
export async function createLead(
  endpointId: string,
  data: {
    [x: string]: any;
  },
  source: "website" | "referral" | "social_media" | "advertisement" | "event" | "other" = "other"
): Promise<string> {
  const [{ leadId }] = await db
    .insert(leads)
    .values({
      data: data,
      email: "",
      firstName: "",
      lastName: "",
      source,
      createdAt: new Date(),
      updatedAt: new Date(),
      endpointId: endpointId,
    })
    .returning({ leadId: leads.id });

  return leadId;
}

/**
 * Gets all leads for a user
 *
 * Protected by authenticatedAction wrapper
 */
export const getLeads = authenticatedAction.action(
  async ({ ctx: { userId } }) => {
    const leadsData = await db
      .select()
      .from(leads)
      .leftJoin(endpoints, eq(leads.endpointId, endpoints.id))
      .where(eq(endpoints.userId, userId))
      .orderBy(desc(leads.createdAt));

    const data: Lead[] = leadsData.map((lead) => {
      return {
        ...lead.lead
      }
    });

    return data;
  },
);

/**
 * Get lead data for one specific lead
 *
 * Protected by authenticatedAction wrapper
 */
export const getLeadData = authenticatedAction
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    const leadWithEndpoint = await db
      .select({
        endpointUserId: endpoints.userId,
      })
      .from(leads)
      .innerJoin(endpoints, eq(leads.endpointId, endpoints.id))
      .where(eq(leads.id, id));

    if (
      !leadWithEndpoint.length ||
      leadWithEndpoint[0].endpointUserId !== userId
    ) {
      throw new Error("You are not authorized for this action.");
    }

    const leadData = await db.select().from(leads).where(eq(leads.id, id));
    return leadData[0];
  });

/**
 * Get all leads by an endpoint id
 *
 * Protected by authenticatedAction wrapper
 */
export const getLeadsByEndpoint = authenticatedAction
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    const endpoint = await db
      .select({
        id: endpoints.id,
        schema: endpoints.schema,
      })
      .from(endpoints)
      .where(and(eq(endpoints.id, id), eq(endpoints.userId, userId)))
      .limit(1);

    if (!endpoint.length) {
      throw new Error("You are not authorized for this action");
    }

    const leadData = await db
      .select()
      .from(leads)
      .where(eq(leads.endpointId, id));

    return { leadData, schema: endpoint[0].schema };
  });

/**
 * Delete a lead by id
 *
 * Protected by authenticatedAction wrapper
 */
export const deleteLead = authenticatedAction
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    const leadWithEndpoint = await db
      .select({ endpointUserId: endpoints.userId })
      .from(leads)
      .innerJoin(endpoints, eq(leads.endpointId, endpoints.id))
      .where(eq(leads.id, id));

    if (
      !leadWithEndpoint.length ||
      leadWithEndpoint[0].endpointUserId !== userId
    ) {
      throw new Error("You are not authorized for this action.");
    }

    await db.delete(leads).where(eq(leads.id, id));
    revalidatePath("/leads");
  });
