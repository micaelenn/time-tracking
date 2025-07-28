// external modules
import { Request, Response, Router } from "express";

// internal modules
import { tasksService } from "./tasks.service";
import { setEndpoint } from '@/config/application'
import { tryCatch } from '@/utils/helpers/tryCatch'
import { Message } from "@/utils/helpers/messages";

export const tasks = Router();

// POST
tasks.post(setEndpoint('tasks'), tryCatch(
  async (req: Request, res: Response) => {
    const taskID = req.body.payload.id
    const action = req.query.action
    await tasksService.handleTimeTracker(taskID, action)
    res.status(200).send(Message.task.created);
  })
)

// GET
tasks.get(setEndpoint('tasks'), tryCatch(
  async (req: Request, res: Response) => {
    res.status(200).send({});
  })
);
