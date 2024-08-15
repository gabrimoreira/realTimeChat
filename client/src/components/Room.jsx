import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import socket from '../utils/socket';

const Room = () => {
    const location = useLocation();
    const { id: userId, room } = location.state || {}; 
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (userId && room) {
            socket.emit('joinRoom', { id: userId, room });

            socket.on('connect', () => {
                console.log('Connected to socket server');
            });

            socket.on('message', (msg) => {
                setMessages((prevMessages) => [...prevMessages, msg]);
            });

            return () => {
                socket.off('message');
            };
        }
    }, [userId, room]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = { userId, text: message };
        socket.emit('message', { room, msg });
        setMessages((prevMessages) => [...prevMessages, msg]);
        setMessage('');
    };

    return (
        <div className="bg-black flex flex-col items-center justify-center w-screen min-h-screen p-4">
            <div className="flex flex-col flex-grow w-full max-w-xl bg-slate-600 shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col-reverse overflow-y-auto p-4 h-full">
                    <ul className="space-y-4">
                        {messages.map((msg, index) => (
                            <li
                                className={`p-3 rounded-lg break-words max-w-sm ${
                                    msg.userId === userId
                                        ? 'bg-blue-500 text-white '
                                        : 'bg-gray-200 text-black ml-auto'
                                }`}
                                key={index}
                            >
                                <div className='flex flex-col'>
                                <span className={`text-xs ${msg.userId === userId ? 'text-gray-200' : 'text-blue-500' }`}>
                                    {msg.userId}
                                </span>
                                <span className='text-gray-800'>
                                {msg.text}
                                </span>
                                
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-4 flex items-center rounded-md mt-auto">
                    <form onSubmit={handleSubmit} className="flex w-full">
                        <input
                            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none text-xs"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Room;
