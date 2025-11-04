import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({ take: 1 });
    return NextResponse.json({
      message: "✅ Database connected successfully!",
      sample: cars,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({
      message: "❌ Database connection failed",
      error: String(error),
    });
  }
}
