import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// This is a GET endpoint: /api/features?categoryId=1
export async function GET(req: NextRequest) {
  // Get the categoryId from query params
  const categoryIdParam = req.nextUrl.searchParams.get("categoryId");
  const categoryId = categoryIdParam ? parseInt(categoryIdParam, 10) : null;

  if (!categoryId || isNaN(categoryId)) {
    return NextResponse.json(
      { error: "Missing or invalid categoryId" },
      { status: 400 }
    );
  }

  try {
    const features = await prisma.feature.findMany({
      where: {
        categoryId: categoryId,
      },
      include: {
        description: {
          orderBy: {
            id: "asc",
          },
        },
      },
    });

    return NextResponse.json({ features });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch features" },
      { status: 500 }
    );
  }
}
