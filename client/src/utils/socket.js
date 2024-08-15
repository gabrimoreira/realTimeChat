
import { io } from 'socket.io-client';

const PORT = import.meta.env.PORT || '3001';
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || `http://localhost:${PORT}`;

const socket = io(VITE_BACKEND_URL); 

export default socket;
