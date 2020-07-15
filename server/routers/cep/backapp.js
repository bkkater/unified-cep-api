const serverFactory =  require(`${process.env.root}/utils/express`);
const controller = require(`${process.env.root}/controllers/cep/backapp`)
const router = serverFactory.create.router();

router.get('/cep/backapp/:cep', controller.find);

module.exports = router;