import {loadTareas, onNewTarea, onSelected } from './socket.js';
import {onHadleSubmit, renderTareas, appendTarea, fillForm} from './ui.js';

onNewTarea(appendTarea)
loadTareas(renderTareas);
onSelected(fillForm)

const tareasForm = document.querySelector('#tareasForm')

tareasForm.addEventListener('submit', onHadleSubmit)