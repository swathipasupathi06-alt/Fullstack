const API = "YOUR_EB_API_URL";

export const fetchTasks = async () => {
  const res = await fetch(API + "/tasks");
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(API + "/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const updateTask = async (id, task) => {
  const res = await fetch(API + "/tasks/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const deleteTask = async (id) => {
  return fetch(API + "/tasks/" + id, {
    method: "DELETE"
  });
};
