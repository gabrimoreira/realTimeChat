const socket = io();
const inputId = document.getElementById("inputId");
const inputRoom = document.getElementById("inputRoom");
const roomsSelect = document.getElementById("rooms");
const roomForm = document.getElementById("roomForm");

roomsSelect.addEventListener("change", () => {
    inputRoom.value = roomsSelect.value;
});

roomForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!inputRoom.value) {
        inputRoom.value = roomsSelect.value;
    }

    if (!inputId.value || !inputRoom.value) {
        alert("ID and Room are required!");
        return;
    }

    console.log("ID:", inputId.value);
    console.log("Room:", inputRoom.value);

    localStorage.setItem('id', inputId.value);
    localStorage.setItem('room', inputRoom.value);

    socket.emit('joinRoom', { id: inputId.value, room: inputRoom.value });

    window.location.href = '/room.html';
});
