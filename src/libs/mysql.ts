import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: Number(process.env.PORTDB),
    database: process.env.DATABASE
  }
})
