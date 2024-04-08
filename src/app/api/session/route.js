import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const session = await getServerSession(authOptions(req, res));

  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }

  return NextResponse.json({
    authenticated: !!session
  });
}