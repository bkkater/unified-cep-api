const service = require(`${process.env.root}/services/cep/correios`);

module.exports = {
    async find(req, res) {
        try {
            const cep = req.params['cep']; // avoid use dot notation for unkown objects.
            const redirect = req.params['redirect'];

            if(cep && cep.length && cep.length === 8) { // todo(@bkkater): create a utils file for validate cep veracity.
    
                const data = await service.find(cep).catch(console.error);

                if(data.erro) {
                    const toPath = (redirect === 'redirect')?`/cep/backapp/${cep}/redirect`:`/cep/error/${cep}`;
                    res.redirect(toPath);
                } else res.status(200).json(data);
            } else res.status(400).json({ message: 'There was an error while trying to undestand cep in url params' });
        } catch(err) { res.status(500).json({ message: 'There was an error while trying to retrieve cep from correios' }); }
    }
}