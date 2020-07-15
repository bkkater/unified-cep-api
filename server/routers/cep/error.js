const serverFactory = require(`${process.env.root}/utils/express`);
const controller    = require(`${process.env.root}/controllers/cep/error`);
const router        = serverFactory.create.router();

router.get('/cep/error/:cep', controller.error);

module.exports = router;