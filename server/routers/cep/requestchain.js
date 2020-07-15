const serverFactory = require(`${process.env.root}/utils/express`);
const controller    = require(`${process.env.root}/controllers/cep/requestchain`);
const router        = serverFactory.create.router();

router.get('/cep/:cep', controller.chain);

module.exports = router;