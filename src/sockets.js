import Tarea from './models/Tarea';

export default (io) => {
    io.on('connection', (socket)=> {
        const emitTareas = async () =>{
            const tareas = await Tarea.find()
            io.emit('server:loadtareas', tareas)
        }
        emitTareas()

        socket.on('client:savetarea', async data => {
            const newTarea = new Tarea (data);
            const savedTarea = await newTarea.save()
            io.emit('server:savedtarea', savedTarea)
        })

        socket.on("client:deletetarea", async (id) => {
            await Tarea.findByIdAndDelete(id)
            emitTareas()
        })

        socket.on('client:gettarea', async id => {
            const tarea = await Tarea.findById(id);
            io.emit('server:selectedtarea', tarea)
        })

        socket.on('client:updatetarea', async (updateTarea) => {
            await Tarea.findByIdAndUpdate(updateTarea._id, {
                title: updateTarea.title,
                description: updateTarea.description
            })
            emitTareas()
        })
    })
}