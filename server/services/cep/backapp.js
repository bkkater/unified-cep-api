const https = require('https');

module.exports = {
    async find(cep){
        return new Promise((resolve, reject) => {
            const options = {
                headers: {
                    'X-Parse-Application-Id': 'abdkdvsHMf2PSPEueEDRXhTii88qZ71aEcRKJeV3', // This is your app's application id
                    'X-Parse-REST-API-Key': 'PpgwWdKUOQGNFR7BZ4QlB6mOwU4C15E4NZz4z0WU', // This is your app's REST API key
                }
            }
            https.get(`https://parseapi.back4app.com/classes/Cepcorreios_CEP/${cep}`, options, (res) =>{
                res.on('data', (dataBuffer) => resolve(JSON.parse(dataBuffer)));
            }).on('error', (error) => reject(error))
        })
    }
}