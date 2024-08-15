# Real-Time Chat Application

This project is a real-time chat application built with React and Tailwind CSS on the client-side and Node.js with Socket.io on the server-side. The application allows users to join chat rooms and exchange messages in real-time.
![chatRoom](https://github.com/user-attachments/assets/1cca40c3-fb77-46ca-a602-2fb0706ebaaa)

![Alt text](./client/public/chatRoom.png)

## Project Structure

```
.
├── client                   # Frontend of the application
│   ├── public               # Static assets
│   ├── src                  # Source files
│   │   ├── components       # React components
│   │   └── utils            # Utility functions (e.g., socket.js)
│   ├── package.json         # Dependencies and scripts for client
│   └── vite.config.js       # Vite configuration
├── server                   # Backend of the application
│   └── index.js             # Main server file
├── package.json             # Dependencies and scripts for server
└── readme.md                # Project documentation
```

## Running the Application Locally

To run this chat application on your local machine, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/gabrimoreira/realTimeChat.git
cd realTimeChat
```

### 2. Install Dependencies

- **Client**:
  ```bash
  cd client
  npm install
  ```

- **Server**:
  ```bash
  cd server
  npm install
  ```

### 3. Set Environment Variables

Create a `.env` file in the `server` directory with the following content:

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### 4. Run the Application

- **Start the Server**:
  ```bash
  cd server
  node index.js
  ```

- **Start the Client**:
  ```bash
  cd ../client
  npm run dev
  ```

### 5. Access the Application

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to use the chat application.

---
