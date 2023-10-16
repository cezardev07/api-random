import express from "express";
import cors from "cors";

import { Express } from "express-serve-static-core";

export class middlewares{
  public middleware(app: Express){
    app.use(cors());
    app.use(express.json());
  }
}
