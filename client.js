const PROTO_PATH = './notes.proto';
const grpc = require('grpc');

const NoteService = grpc.load(PROTO_PATH).NoteService
// const client = new NoteService('52.201.213.189:50051', grpc.credentials.createInsecure());
const client = new NoteService('127.0.0.1:50051', grpc.credentials.createInsecure());

module.exports = client