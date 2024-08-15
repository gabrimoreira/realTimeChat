# Real-Time Chat Application

This project is a real-time chat application built with React and Tailwind CSS on the client-side and Node.js with Socket.io on the server-side. The application allows users to join chat rooms and exchange messages in real-time. See here how it works:
https://real-time-chat-jet-six.vercel.app/


<p>
    <img src="https://github.com/user-attachments/assets/ca466e0f-1daf-4563-89b1-09b9cd39022d" alt="Join Room" width="48%" />
    <img src="https://github.com/user-attachments/assets/1cca40c3-fb77-46ca-a602-2fb0706ebaaa" alt="Chat Room" width="48%" />
</p>


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
  cd ../server
  npm install
  ```

### 3. Set Environment Variables

Create a `.env` file in the `client` and `server` directory with the based on .env.local.example:

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

### 6. Deploy

The deployment can be done using Vercel for the client and Render for the server. It’s important to note that the free version of Render may experience a short delay in response time after periods of inactivity, which is expected behavior.

---
