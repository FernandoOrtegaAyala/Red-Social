import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request) {
  try {
    const dataReq = await request.json();
    const comment = await prisma.comentarios.create({
      data: {
        id_post: dataReq.id_post,
        id_usuario: dataReq.id_usuario,
        texto: dataReq.makeComment,
      },
    });
    return NextResponse.json({
      message: "Comment created successfully",
      comment,
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Error creating comment" },
      { status: 500 }
    );
  }
}
