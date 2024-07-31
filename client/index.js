const socket = io();
const messageInput = document.getElementById("message")
const submitBtn = document.getElementById("submit")
const messages = document.getElementById("messages")

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if (messageInput.value) {
        socket.emit('message', messageInput.value);
        console.log("teste")

        const newMessage = document.createElement("li")
        newMessage.classList.add("myMessage")
        newMessage.innerHTML = `${messageInput.value}`
        messages.appendChild(newMessage)
        messageInput.value = '';
      }
})



socket.on('message', (msg)=>{
  if (msg) {
    const newMessage = document.createElement("li")
    newMessage.classList.add("externalMessage")
    newMessage.innerHTML = `${msg}`
    messages.appendChild(newMessage)
  }
})