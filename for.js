const service = require('./service')

async function main(){
    try{
        const result = await service.getpeople('a')
        const names = []

        for (let i = 0; i <= result.results.length -1; i++) {
            const people = result.results[i]
            names.push(people.name)
            
        }
        console.log(names)

    }catch(error){
        console.log('ERRO', error)
    }
}
main()