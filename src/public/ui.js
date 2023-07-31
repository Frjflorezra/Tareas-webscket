import { saveTarea, deleteTarea, getTareaById, updateTarea } from "./socket.js";

const tareasList = document.querySelector("#tareas");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
let savedId = ""
const tareaUI = (tarea) => {
  const div = document.createElement("div");
  div.innerHTML = `
        <div> 
            <h1>${tarea.title}</h1>
            <div>
                <button class = "delete" data-id = "${tarea._id}">Delete</button>
                <button class = "update" data-id = "${tarea._id}">Update</button>
            </div>
            <p>${tarea.description}</p>
        </div>
    `;
  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");
  btnDelete.addEventListener("click", (e) => deleteTarea(btnDelete.dataset.id));
  btnUpdate.addEventListener("click", (e) =>
    getTareaById(btnUpdate.dataset.id)
  );
  return div;
};
export const renderTareas = (tareas) => {
    
  tareasList.innerHTML = "";
  tareas.forEach((tarea) => tareasList.append(tareaUI(tarea)));
};

export const fillForm = (tarea) => {
  title.value = tarea.title;
  description.value = tarea.description;
  savedId = tarea._id
};

export const onHadleSubmit = (e) => {
  e.preventDefault();
  if (savedId){
    updateTarea(savedId, title.value, description.value)
  }else {
    saveTarea(title.value, description.value);

  }
};

export const appendTarea = (tarea) => {
  tareasList.append(tareaUI(tarea));
};
