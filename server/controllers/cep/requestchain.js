module.exports = {
    async chain(req, res) {
        try {
            const cep = req.params['cep'];
            const jump = req.query['jump'];
            const query = (!jump)?'':`?jump=${jump}`;

            if (cep && cep.length && cep.length === 8) {
                res.redirect(`/cep/correios/${cep}${query}`);
            } else res.status(400).json({ message: 'There was an error while trying to undestand cep in url params' });
        } catch(err) { res.status(500).json({ message: 'There was an error while trying to retrieve cep from correios' }); }
    }
}