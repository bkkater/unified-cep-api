const service = require(`${process.env.root}/services/cep/backapp`);

module.exports = {
    async find(req, res){
        try{
            const cep = req.params['cep'];
            // const redirect = req.params['redirect'];

            if(cep && cep.length && cep.length === 8){

                const data = await service.find(cep).catch(console.error);

                if (data.error) {
                    // const toPath = (redirect === 'redirect')?`/cep/next/${cep}`:`/cep/error/${cep}`;
                    res.redirect(`/cep/error/${cep}`);
                } else res.status(200).json(data);
            } else res.status(400).json({message: 'There was an error while trying to understand cep in url params'})
        }catch(err){res.status(500).json({message: 'There was an error while trying to retrieve cep from backapp'})};
    }
}