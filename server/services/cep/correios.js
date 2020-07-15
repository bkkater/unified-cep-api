const https = require('https');

module.exports = {
    async find(cep) {
        return new Promise((resolve, reject) => {
            https.get(`https://viacep.com.br/ws/${cep}/json/`, (res) => {
                res.on('data', (dataBuffer) => resolve(JSON.parse(dataBuffer)));
            }).on('error', (error) => reject(error));
        });
    }
}