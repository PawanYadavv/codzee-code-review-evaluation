
import express from "express";
import taskRouter from "./task.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
