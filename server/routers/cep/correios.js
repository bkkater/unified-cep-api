const serverFactory = require(`${process.env.root}/utils/express`);
const controller    = require(`${process.env.root}/controllers/cep/correios`);
const router        = serverFactory.create.router();

// https://www.unified-cep-api.com/cep/correios/08223550

router.get('/cep/correios/:cep/:redirect', controller.find);

module.exports = router;