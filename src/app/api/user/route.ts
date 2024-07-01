import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import bcryptjs from "bcryptjs";

export async function PUT(request) {
  try {
    const dataReq = await request.json();
    if (dataReq.nombre) {
      const user = await prisma.usuarios.update({
        where: { id_usuario: dataReq.id_usuario },
        data: {
          nombre_usuario: dataReq.nombre_usuario,
          nombre: dataReq.nombre,
          apellidos: dataReq.apellidos,
          bio: dataReq.bio,
        },
      });
      return NextResponse.json({ message: "User updated successfully", user });
    }
    if (dataReq.avatar) {
      const user = await prisma.usuarios.update({
        where: { id_usuario: dataReq.id_usuario },
        data: {
          avatar: dataReq.avatar,
        },
      });
      return NextResponse.json({ message: "Photo updated" });
    }
    if (dataReq.newPassword) {
      const hashedPassword = await bcryptjs.hash(dataReq.newPassword, 10);
      const user = await prisma.usuarios.update({
        where: { email: dataReq.email },
        data: {
          password: hashedPassword,
        },
      });
      return NextResponse.json({
        message: "Password updated successfully",
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}
