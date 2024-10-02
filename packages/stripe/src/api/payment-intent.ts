import { getUser } from "@v1/supabase/queries";
import { NextRequest, NextResponse } from "next/server";
import { createPaymentIntent } from "../index";

export async function POST(request: NextRequest) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await request.json();
  const { amount, currency } = data as { amount: number; currency: string };

  if (!amount || !currency) {
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 },
    );
  }
  try {
    if (!user.id) {
      return NextResponse.json(
        { error: "User ID not found" },
        { status: 400 }
      );
    }
    const paymentIntent = await createPaymentIntent(user.id, amount, currency);
    return NextResponse.json(paymentIntent);
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 },
    );
  }
}
