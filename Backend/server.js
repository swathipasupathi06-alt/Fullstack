import express from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";
import { createTask, getTasks, updateTask, deleteTask } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Todo API running"));

app.post("/tasks", async (req, res) => {
  const { task, date, time } = req.body;

  const item = {
    id: uuid(),
    task,
    date,
    time,
    completed: false
  };

  await createTask(item);
  res.json({ message: "Task created", item });
});

app.get("/tasks", async (req, res) => {
  const items = await getTasks();
  res.json(items);
});

app.put("/tasks/:id", async (req, res) => {
  await updateTask(req.params.id, req.body);
  res.json({ message: "Task updated" });
});

app.delete("/tasks/:id", async (req, res) => {
  await deleteTask(req.params.id);
  res.json({ message: "Task deleted" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on " + port));
