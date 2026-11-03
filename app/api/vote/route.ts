
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const OPTIONS = [
  "Solar Eclipse 2027",
  "Artemis III",
  "Tesla Roadster",
];

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("vote" in body) ||
      typeof body.vote !== "string" ||
      !OPTIONS.includes(body.vote)
    ) {
      return NextResponse.json(
        { error: "Please select a valid voting option." },
        { status: 400 }
      );
    }

    const scriptUrl = "https://script.google.com/macros/s/AKfycbwr-WP7zOPIjmJvIjCvJsgFreHUEJVcoZ0s6ASh_dzNOF7nj7nJ4lV9kBjuRFeT10VVAw/exec";
    const secret = "01a1a1b8-3298-768a-8dca-7a5e97eca57e";

    if (!scriptUrl || !secret) {
      console.error("Google Sheets configuration is missing.");

      return NextResponse.json(
        { error: "Voting is temporarily unavailable." },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        vote: body.vote,
        secret,
      }),
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Apps Script returned ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Vote submission failed.");
    }

    return NextResponse.json({
      success: true,
      message: "Your vote has been submitted.",
    });
  } catch (error) {
    console.error("Vote API error:", error);

    return NextResponse.json(
      { error: "Could not submit your vote. Please try again." },
      { status: 500 }
    );
  }
}
