
import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];
let nextId = 1;

router.post("/", (req: Request, res: Response) => {
  const { title } = req.body ?? {};

  if (typeof title !== "string" || title.trim().length === 0) {
    return res.status(400).json({
      error: "Title must be a non-empty string",
    });
  }

  if (title.trim().length > 100) {
    return res.status(400).json({
      error: "Title must not exceed 100 characters",
    });
  }

  const task: Task = {
    id: nextId++,
    title: title.trim(),
    completed: false,
  };

  tasks.push(task);
  return res.status(201).json(task);
});

router.get("/", (_req: Request, res: Response) => {
  return res.status(200).json(tasks);
});

export default router;
