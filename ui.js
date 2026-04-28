const list = document.getElementById("taskList");

export const render = (task) => {
  list.innerHTML = "";
  task.forEach((t) => {
    //crear eelemento li
    const li = document.createElement("li");

    //agregar clase al li
    // al poner li.class tiene que ser igual a "task-item" + (t.completed ? " completed" : "") para que se agregue la clase completed si la tarea esta completada

    li.className = "task-item" + (t.completed ? " completed" : "");

    //guardar id
    li.dataset.id = t.id;

    //crear span
    const span = document.createElement("span");
    span.textContent = t.text;

    // crear contenedor de botones
    const actions = document.createElement("div");
    actions.className = "actions";

    //crear boton editar
    const editBtn = document.createElement("Button");
    editBtn.className = "btn-edit";
    editBtn.textContent = "E";

    //crear bototn eliminar
    const deleteBtn = document.createElement("Button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "X";

    // se agregan los botones al contenedor de acciones
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    // se agrega el span y el contenedor de acciones al li
    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
  });
};
