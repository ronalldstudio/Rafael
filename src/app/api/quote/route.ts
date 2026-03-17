import { NextRequest, NextResponse } from "next/server";
import { QuoteFormSchema } from "@/types";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = QuoteFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Log submission (replace with email/CRM integration as needed)
  console.log("[QuoteRequest]", new Date().toISOString(), JSON.stringify(data, null, 2));

  return NextResponse.json(
    {
      success: true,
      message: "Quote request received. We'll be in touch shortly!",
    },
    { status: 200 }
  );
}
