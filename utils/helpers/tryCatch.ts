import { Request, Response, NextFunction } from "express";
import { App } from "@/config/application";
import { Message } from "@/utils/helpers/messages"

export const tryCatch = (controller: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res);
  } catch (error) {

    if (App.enableDebug === 'true') {
      console.log(error)
    }

    return res.status(500).send({ 
      message: Message.error.server,
    });
  }
}