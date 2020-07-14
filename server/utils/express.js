const express = require('express');

module.exports = {
    create: {
        app() {
            const app = express();
            return app;
        },
        router() {
            const router = express.Router();
            return router;
        },
        route(app, router) {
            app.use(router);
        }
    }
}