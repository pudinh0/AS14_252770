const API_URL = "http://localhost:8080/TasksAPI/api/task";

export let tasks = [];

//GET OBTENER TAREAS
export const getTask = async () => {
  const response = await fetch(API_URL);

  tasks = await response.json();

  return tasks;
};

// POST: CREAR TAREA
export const postTask = async (text) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ text: text, completed: false }),
  });

  const newTask = await response.json();
  tasks.push(newTask);
  return tasks;
};








//
export const addTask = (text) => {
  const task = { id: Date.now(), text, completed: false };
  tasks.push(task);
  return tasks;
};

export const deleteTask = (id) => {
  tasks = tasks.filter((t) => t.id !== id);
  return tasks;
};

export const toggleTask = (id) => {
  const task = tasks.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
  return tasks;
};

export const editTask = (id, newTask) => {
  const task = tasks.find((t) => t.id === id);
  if (task) task.text = newTask;
};
