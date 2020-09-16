require('dotenv').config()

const grpc = require('grpc')
const uuidv1 = require('uuid').v1
const notesProto = grpc.load('notes.proto')
const server = new grpc.Server()


const makeString =  function (length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        let str = makeString(process.env.NUM)
        const notes = [
            { id: '1', title: 'Note 1', content: `${str}`},
        ]
        callback(null, notes)
    },
    // insert: (call, callback) => {
    //     let note = call.request
    //     note.id = uuidv1()
    //     notes.push(note)
    //     callback(null, note)
    // }
})


server.bind(process.env.URI, grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()