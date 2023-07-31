const socket = io();

export const loadTareas = (callback) => {
  socket.on("server:loadtareas", callback);
};

export const saveTarea = (title, description) => {
  socket.emit("client:savetarea", {
    title,
    description,
  });
};

export const onNewTarea = (callback) => {

  socket.on("server:newtarea", callback);
};

export const deleteTarea = id =>{
    socket.emit('client:deletetarea', id)
}

export const getTareaById = (id) => {
    socket.emit("client:gettarea", id)
}

export const onSelected = (callback) =>{
    socket.on('server:selectedtarea', callback)
}

export const updateTarea = (id, title, description) => {
    socket.emit("client:updatetarea", {
        _id: id,
        title,
        description,
    })
}