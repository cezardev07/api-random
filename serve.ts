import "dotenv/config";
import app from "./app/app";
import express from "express";

import { Request, Response } from "express";

const PORT = process.env.PORT || 3333;

const serve = app.serve();

serve.use("/public", express.static("public"))
serve.get("/home", (_req: Request, res: Response) => {
  return res.sendFile(__dirname + "/public/index.html")
});

serve.listen(PORT, callback);

function callback(){
  return console.log(`serve is running PORT: ${PORT}`);
}