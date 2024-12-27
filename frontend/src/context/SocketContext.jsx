// src/SocketProvider.js
import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

// Create a context for the socket
export const SocketContext = createContext();

// Initialize the socket connection with the environment variable
const socket = io(import.meta.env.VITE_BASE_URL); // Make sure VITE_BASE_URL is defined in .env

const SocketProvider = ({ children }) => {
    useEffect(() => {
        // Basic connection logic
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        // Cleanup on unmount
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.close(); // Close the socket connection when component unmounts
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
