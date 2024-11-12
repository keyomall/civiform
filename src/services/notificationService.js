const socketIo = require('socket.io');

let io;

const notificationService = {
  init(server) {
    io = socketIo(server);
    io.on('connection', (socket) => {
      console.log('New client connected');
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  },

  sendNotification(userId, message) {
    io.to(userId).emit('notification', message);
  },

  sendBroadcast(message) {
    io.emit('broadcast', message);
  },
};

module.exports = notificationService;