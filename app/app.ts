import express from "express";
import routes from "../routes/routes";
import { middlewares } from "../middlewares/middlewares";

export class app extends middlewares{
  private app = express();

  constructor(){
    super();
    this.init();
  }
  
  private init(){
    this.app = express();
    this.middleware(this.app);
    this.app.get("/", routes.get);
  }

  public serve(){
    return this.app;
  }
}

export default new app();