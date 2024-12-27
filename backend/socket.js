const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',  // In production, you should limit the origins here.
            methods: ['GET', 'POST'],
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        // Handle 'join' event to associate socketId with user or captain
        socket.on('join', async (data) => {
            const { userId, userType } = data;

            try {
                if (userType === 'user') {
                    await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
                } else if (userType === 'captain') {
                    await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
                }
                console.log(`User ${userId} of type ${userType} joined`);
            } catch (error) {
                console.error(`Error while joining: ${error.message}`);
                socket.emit('error', { message: 'Failed to join', error: error.message });
            }
        });

        // Handle 'update-location-captain' event to update captain's location
        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            try {
                await captainModel.findByIdAndUpdate(userId, {
                    location: {
                        ltd: location.ltd,
                        lng: location.lng,
                    },
                });
                console.log(`Captain ${userId} location updated`);
            } catch (error) {
                console.error(`Error while updating location: ${error.message}`);
                socket.emit('error', { message: 'Failed to update location', error: error.message });
            }
        });

        // Handle disconnect event and clean up socketId in the database
        socket.on('disconnect', async () => {
            console.log(`Client disconnected: ${socket.id}`);

            try {
                await userModel.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
                await captainModel.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
                console.log(`Socket ID ${socket.id} removed from user and captain models`);
            } catch (error) {
                console.error(`Error during disconnect cleanup: ${error.message}`);
            }
        });
    });
}

// Function to send a message to a specific socketId
const sendMessageToSocketId = (socketId, messageObject) => {
    console.log(messageObject);  // For debugging purposes

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
};

module.exports = { initializeSocket, sendMessageToSocketId };
