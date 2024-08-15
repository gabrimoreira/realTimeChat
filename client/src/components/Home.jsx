import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [id, setId] = useState('');
    const [room, setRoom] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/room', { state: { id, room } });
    };

    return (
        <div className="bg-black h-screen overflow-hidden flex items-center justify-center">
            <form className="p-5 md:p-5 bg-slate-700 rounded-md lg:w-5/12 md:6/12 w-10/12 shadow-3xl" onSubmit={handleSubmit}>
                <div className="flex items-center text-lg mb-6 md:mb-8">
                    <input
                        className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full rounded-md"
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center text-lg mb-6 md:mb-8">
                    <input
                        className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full rounded-md"
                        type="text"
                        placeholder="Room"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-center w-full">
                    <button
                        className="flex items-center bg-gradient-to-b from-blue-700 to-sky-400 font-medium p-2 md:p-4 text-white rounded-xl uppercase"
                        type="submit"
                    >
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Home;
