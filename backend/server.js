const http = require('http');
require('dotenv').config();
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Initialize WebSocket with the HTTP server
initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});