require('dotenv').config()

const grpc = require('grpc')
const uuidv1 = require('uuid').v1
const notesProto = grpc.load('notes.proto')
const server = new grpc.Server()
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]
server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
    insert: (call, callback) => {
        let note = call.request
        note.id = uuidv1()
        notes.push(note)
        callback(null, note)
    }
})


server.bind(process.env.URI, grpc.ServerCredentials.createInsecure())
console.log(`Server running at ${process.env.URI}`)
server.start()