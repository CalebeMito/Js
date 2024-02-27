const axios = require('axios')
const URL = 'https://swapi.dev/api/people/'

async function getpeople(name){
    const url = `${URL}/?search=${name}&format = json`
    const response = await axios.get(url)
    return response.data
}

/*getpeople('r2')
.then(function(result){
    console.log('resultado', result)
})
.catch(function(error){
    console.log('ERRO', error)
})*/

module.exports ={
    getpeople
}