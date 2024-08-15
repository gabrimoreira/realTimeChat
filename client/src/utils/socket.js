
import { io } from 'socket.io-client';

const VITE_BACKEND_URL = "http://localhost:3001";

const socket = io(VITE_BACKEND_URL);

export default socket;
