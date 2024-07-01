import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request) {
  try {
    const dataReq = await request.json();

    const post = await prisma.posts.create({
      data: {
        id_usuario: dataReq.id_usuario,
        texto: dataReq.texto,
        imagen1_url: dataReq.imagesURL[0],
        imagen2_url: dataReq.imagesURL[1],
        imagen3_url: dataReq.imagesURL[2],
        imagen4_url: dataReq.imagesURL[3],
      },
    });

    return NextResponse.json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
