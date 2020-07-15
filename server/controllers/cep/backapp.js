const service = require(`${process.env.root}/services/cep/backapp`);

module.exports = {
    async find(req, res){
        try{
            const cep = req.params['cep'];

            if(cep && cep.length && cep.length === 8){

                const data = await service.find(cep);

                res.status(200).json(data);

            } else res.status(400).json({message: 'There was an error while trying to understand cep in url params'})

        }catch(err){res.status(500).json({message: 'There was an error while trying to retrieve cep from backapp'})};
    }
}