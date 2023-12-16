import "dotenv/config";
import app from "./app/app";
import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerDocumetation from "./swagger.json";

import { Request, Response } from "express";

const PORT = process.env.PORT || 3333;

const serve = app.serve();

serve.use("/public", express.static("public"))
serve.get("/home", (_request: Request, response: Response) => {
  return response.sendFile(__dirname + "/public/index.html")
});

serve.use("/doc", swaggerUi.serve);
serve.get("/doc", swaggerUi.setup(swaggerDocumetation));
serve.get("/swagger", (_request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/swagger.json")
})
serve.get("/docs", (_request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/index.html")
})

serve.listen(PORT, callback);

function callback(){
  return console.log(`serve is running PORT: ${PORT}`);
}
