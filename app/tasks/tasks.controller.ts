// external modules
import { Request, Response, Router } from "express";

// internal modules
import { tasksService } from "./tasks.service";
import { setEndpoint } from '@/config/application'
import { tryCatch } from '@/utils/helpers/tryCatch'

export const tasks = Router();

// POST
tasks.post(setEndpoint('tasks'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({});
  })
)

// GET
tasks.get(setEndpoint('tasks'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({});
  })
);
