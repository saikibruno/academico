// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";

export default class SemestreController {
    index(){
        return Semestre.query().preload('turmas')
    }

    store({request}){
        const dados = request.only(['nome','dataInicio','dataFim'])

        return Semestre.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Semestre.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const dados = await Semestre.findOrFail(id)

        return dados.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Semestre.findOrFail(id)
        const dado = await request.only(['nome','dataInicio','dataFim'])
        
        return dados.merge(dado).save()
    }
}
