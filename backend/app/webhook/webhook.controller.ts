// external modules
import { Request, Response, Router } from "express";

// internal modules
import { webhookService } from "./webhook.service";
import { setEndpoint } from '@/config/application'
import { tryCatch } from '@/utils/helpers/tryCatch'

export const webhook = Router();

// POST
webhook.post(setEndpoint('webhook'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({ message: "Hello World!" });
  })
)

// GET
webhook.get(setEndpoint('webhook'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({ message: "Hello World!" });
  })
);
