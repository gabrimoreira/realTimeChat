const socket = io();
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit");
const messages = document.getElementById("messages");
const roomName = document.getElementById("roomName");


const id = localStorage.getItem('id');
const room = localStorage.getItem('room');

if (roomName) {
    roomName.innerHTML = `ID: ${id}, Room: ${room}`;
}
socket.emit('joinRoom', { id, room });


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Message: " + messageInput.value)
    if (messageInput.value) {
        socket.emit('message', { room, msg: messageInput.value });
        console.log("teste");

        const newMessage = document.createElement("li");
        newMessage.classList.add("myMessage");
        newMessage.innerHTML = `${messageInput.value}`;
        messages.appendChild(newMessage);
        messageInput.value = '';
    }
});

socket.on('message', (msg) => {
    if (msg) {
        const newMessage = document.createElement("li");
        newMessage.classList.add("externalMessage");
        newMessage.innerHTML = `${msg}`;
        messages.appendChild(newMessage);
        socket.emit('message', (msg))
    }
});
