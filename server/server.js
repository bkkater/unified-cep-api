require('./config');
const serverFactory = require('./utils/express');
const routers = require('./routers/router');

const server = serverFactory.create.app();

routers.forEach((router) => {
    serverFactory.create.route(server, router);
});

server.listen(process.env.port, () => console.log('Running on port', process.env.port));
