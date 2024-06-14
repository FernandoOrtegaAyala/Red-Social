import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("Hola mundo")
}

export async function POST(request) {
  const {nombre_usuario , email, contraseña } = await request.json()

  const result = await conn.query("INSERT INTO usuarios SET ?", {
    nombre_usuario,
    email,
    contraseña
  })
  
  console.log(result)
  
  
  return NextResponse.json("Creando usuario")
}