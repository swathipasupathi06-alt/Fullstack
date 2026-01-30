import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ task, date, time, completed: false });
    setTask("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />

      <button type="submit">Add</button>
    </form>
  );
}
