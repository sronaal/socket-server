
class Sockets {


    constructor(io) {

        this.io = io
        
        this.socketEvents()
     }


    socketEvents() {
        // On Conexion
        this.io.on('connection', (socket) => {


            
            // Escuchar Evento mensaje-to-server
            socket.on('mensaje-to-server', (data) => {
                console.log(data)

                this.io.emit('mensaje-from-server', data)
            })
        })

    }
}


module.exports = Sockets