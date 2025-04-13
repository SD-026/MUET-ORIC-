require('dotenv').config();
const subject = require('./routes/subject');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');
const leaderboardRoutes = require('./routes/leaderboard');
const notificationRoutes = require('./routes/notification');
const path = require('path');


const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cors());




// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/resources', require('./routes/resource'));
app.use('/api/subjects', subject);
// app.use('/api/quiz', require('./routes/quiz'));
// app.use('/api/quiz', require('./routes/quiz'));
app.use('/api/admin', require('./routes/teacher'));




// Create HTTP server and Socket.io instance
const server = http.createServer(app);


// Socket.io connection for real-time notifications


// Example function to send a notification

server.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port 5000');
});

const rootPath = path.resolve(); // Or __dirname if it's set correctly

// Serve static frontend files
// Serve static files
app.use(express.static(path.join(rootPath, 'frontend', 'dist')));

// Fallback route — catch anything not handled above
app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, 'frontend', 'dist', 'index.html'));
});


// app.use(express.static(path.join(rootPath, '/frontend/dist')))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(rootPath, 'frontend','dist','index.html'));
// })