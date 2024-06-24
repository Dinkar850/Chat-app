import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.Server(app);
const io = new Server(server);
app.use(express.static('public'));

app.get('/', (req, res) => {
    const url = path.join(__dirname, 'index.html');
    res.sendFile(url);
})

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        
    })
})


server.listen(3000);