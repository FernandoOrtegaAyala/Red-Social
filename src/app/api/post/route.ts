import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request) {
  try {
    const dataReq = await request.json();

    return NextResponse.json(dataReq);
    // return NextResponse.json({
    //   message: "Post created successfully",
    // });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
