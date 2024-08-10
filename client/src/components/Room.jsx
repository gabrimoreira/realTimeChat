import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL); 
const Room = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('id');
        const room = localStorage.getItem('room');
        socket.emit('joinRoom', { id, room });

        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('message', { room: localStorage.getItem('room'), msg: message });
        setMessages((prevMessages) => [...prevMessages, message]);
        setMessage('');
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Room;
