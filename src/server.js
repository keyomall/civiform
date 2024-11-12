const app = require('./app');
const http = require('http');
const notificationService = require('./services/notificationService');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

notificationService.init(server);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});