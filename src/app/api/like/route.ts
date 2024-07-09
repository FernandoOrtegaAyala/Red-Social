import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const idUsuario = searchParams.get("idUsuario");

    const like = await prisma.likes.findFirst({
      where: {
        id_usuario: parseInt(idUsuario, 10),
      },
      select: {
        id_usuario: true,
      },
    });

    return NextResponse.json(like);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const dataReq = await request.json();
    const like = await prisma.likes.create({
      data: {
        id_post: dataReq.id_post,
        id_usuario: dataReq.id_usuario,
      },
    });
    return NextResponse.json({ message: "Like created successfully" });
  } catch (error) {
    console.error("Error creating like:", error);
    return NextResponse.json({ error: "Error creating like" }, { status: 500 });
  }
}
export async function DELETE(request) {
  try {
    const dataReq = await request.json();
    const like = await prisma.likes.deleteMany({
      where: {
        id_usuario: dataReq.id_usuario,
      },
    });
    return NextResponse.json({ message: "Like deleted successfully" });
  } catch (error) {
    console.error("Error deleting like:", error);
    return NextResponse.json({ error: "Error deleting like" }, { status: 500 });
  }
}
