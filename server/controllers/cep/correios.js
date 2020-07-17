const service = require(`${process.env.root}/services/cep/correios`);

module.exports = {
    async find(req, res) {
        try {
            const cep = req.params['cep']; // avoid use dot notation for unkown objects.
            const jump = req.query['jump'];

            if(jump === 'correios'){
                this.jump(res);
            }

            if(cep && cep.length && cep.length === 8) { // todo(@bkkater): create a utils file for validate cep veracity.
    
                const data = await service.find(cep).catch(console.error);

                if(data.erro) {  
                    if(!jump){
                        res.redirect(`/cep/${cep}?jump=correios`)
                    } else this.jump(res)               
                } else res.status(200).json(data);
            } else res.status(400).json({ message: 'There was an error while trying to undestand cep in url params' });
        } catch(err) { res.status(500).json({ message: 'There was an error while trying to retrieve cep from correios' }); }
    },
    jump(res){
        res.redirect(`/cep/backapp/${cep}`);
    }
}