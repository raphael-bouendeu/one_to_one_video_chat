const express = require("express")
const http = require("http")


const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app)

const io = require("socket.io")(server)

app.use(express.static("public"))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
let connectedPeers = []

io.on("connection", (socket) => {
    connectedPeers.push(socket.id)
    socket.on('pre-offer', (data) => {
        const { calleePersonalCode, callType } = data;
        const connectedPeer = connectedPeers.find((peerSockedId) =>
            peerSockedId == calleePersonalCode
        )
        if (connectedPeer) {
            const data = {
                callerSocketId: socket.id,
                callType,
            }
            io.to(calleePersonalCode).emit("pre-offer", data)
        }
    })
    socket.on("disconnect", () => {
        console.log("user disconnected")
        const newConnectedPeers = connectedPeers.filter((peerSockedId) =>
            peerSockedId !== socket.id
        )
        connectedPeers = newConnectedPeers
        console.log("after disconnected")
        console.log(connectedPeers)
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})