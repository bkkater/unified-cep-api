module.exports = {
    async error(req, res) {
        const cep = req.params['cep'];

        res.status(404).json({
            code: 404,
            cep: cep,
            message: 'CEP NOT FOUND'
        });
    }
}