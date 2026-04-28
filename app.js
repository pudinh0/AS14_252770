import * as state from "./state.js";
import * as ui from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const input = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addBtn");
  const list = document.getElementById("taskList");

  const tasks = await state.getTask();

  ui.render(tasks);

  addBtn.addEventListener("click", async () => {
    if (!input.value.trim()) return;
    await state.postTask(input.value);
    input.value = "";
    ui.render(state.tasks);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBtn.click();
  });

  list.addEventListener("click", async (e) => {
    const id = parseInt(e.target.closest("li").dataset.id);

    if (e.target.classList.contains("btn-delete")) {
      await state.deleteTask(id);
    } 
    else if (e.target.classList.contains("btn-edit")) {
      const task = state.tasks.find((t) => t.id === id);
      const newtext = prompt("editar:", task.text);
      if (newtext) await state.editTask(id, newtext);
    } 
    
    else if (e.target.tagName !== "BUTTON") {
      state.toggleTask();
    }

    ui.render(state.tasks);
  });
});
