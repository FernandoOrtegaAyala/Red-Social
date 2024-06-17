import db from "@/libs/db";
import bcryptjs from "bcryptjs";

const { NextResponse } = require("next/server");

export async function POST(request) {
  try {
    const data = await request.json();

    const userFound = await db.usuarios.findUnique({
      where: {
        nombre_usuario: data.nombre_usuario,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "El usuario ya existe",
        },
        {
          status: 422,
        }
      );
    }
    const emailFound = await db.usuarios.findUnique({
      where: {
        email: data.email,
      },
    });

    if (emailFound) {
      return NextResponse.json(
        {
          message: "El email ya existe",
        },
        {
          status: 409,
        }
      );
    }
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newUser = await db.usuarios.create({
      data: {
        nombre_usuario: data.nombre_usuario,
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,
        password: hashedPassword,
        cumpleanos: data.cumpleanos,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(
      {
        message: "Usuario creado exitosamente",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
