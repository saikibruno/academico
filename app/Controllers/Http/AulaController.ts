// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"

export default class AulaController {
    index(){
        return Aula.all()
    }
    
    store({request}){
        const dados = request.only(['data','conteudo','turmaId'])

        return Aula.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Aula.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const dados = await Aula.findOrFail(id)

        return dados.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Aula.findOrFail(id)
        const dado = await request.only(['data','conteudo','turmaId'])
        
        return dados.merge(dado).save()
    }
}
