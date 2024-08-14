import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const PORT = import.meta.env.PORT || '3001';
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || `http://localhost:${PORT}`;

const socket = io(VITE_BACKEND_URL); 
const Room = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('id');
        const room = localStorage.getItem('room');
        socket.emit('joinRoom', { id, room });

        socket.on('connect', () => {
            console.log('Connected to socket server');
        });

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
        <div class="bg-black flex flex-col items-center justify-center w-screen min-h-screen p-10">
            <div class="flex flex-col flex-grow w-full max-w-xl bg-slate-600 shadow-xl rounded-lg overflow-hidden ">
                <div class="flex w-full mt-2 pl-4 space-x-3 max-w-xs">
                    <ul class="w-full">
                        {messages.map((msg, index) => (
                            <li
                            class="mb-4 bg-white p-3 rounded-r-lg rounded-bl-lg space-y-2 break-words"
                            key={index}>{msg}</li>
                        ))}
                    </ul>
                </div>
                <div class="mt-auto">
                    <form onSubmit={handleSubmit}>
                        <div class="bg-white p-4 flex items-center rounded-md">
                            <input
                                class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button type="submit" class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Room;
