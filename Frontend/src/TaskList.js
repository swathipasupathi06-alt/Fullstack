export default function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul style={{ paddingLeft: "20px" }}>
      {tasks.map((t) => (
        <li key={t.id} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => onUpdate(t.id, { ...t, completed: !t.completed })}
            style={{ marginRight: "10px" }}
          />

          <strong>{t.task}</strong>  
          <span style={{ marginLeft: "10px", color: "grey" }}>
            {t.date} {t.time}
          </span>

          <button
            onClick={() => onDelete(t.id)}
            style={{
              marginLeft: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "2px 6px",
              cursor: "pointer"
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
