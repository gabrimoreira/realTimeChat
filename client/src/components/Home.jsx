import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [id, setId] = useState('');
    const [room, setRoom] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('id', id);
        localStorage.setItem('room', room);
        navigate('/room');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
            <input type="text" placeholder="Room" value={room} onChange={(e) => setRoom(e.target.value)} required />
            <button type="submit">Enter</button>
        </form>
    );
};

export default Home;
