const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ваш файл базы данных
const middlewares = jsonServer.defaults();

// Включаем CORS
server.use(cors());

// Используем middleware и роутер для обработки запросов
server.use(middlewares);
server.use(router);

// Запускаем сервер
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});
