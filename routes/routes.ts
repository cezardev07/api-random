import { Request, Response } from "express";
import { array } from "../data/data";

class routes {  
  public get(_request: Request, response: Response){
    const rd = Math.floor(Math.random() * array.length);
      
    return response.status(200).json({
      status: 200,
      mensage: array[rd]
    });
  }
}

export default new routes();