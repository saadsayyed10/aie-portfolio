import { connectToDB } from "@/lib/connect-db";
import { NextResponse } from "next/server";

export function GET() {
  try {
    connectToDB();
    return NextResponse.json(
      { message: "API route is healthy" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "DB connection failed" },
      { status: 400 },
    );
  }
}
``;
