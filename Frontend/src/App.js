import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (data) => {
    await createTask(data);
    load();
  };

  const handleUpdate = async (id, data) => {
    await updateTask(id, data);
    load();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    load();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>To-do List</h2>

      <TaskForm onSubmit={handleCreate} />

      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
