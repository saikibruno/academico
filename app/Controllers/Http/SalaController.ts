// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala";
import SalaValidator from "App/Validators/SalaValidator";

export default class SalaController {
    index(){
        return Sala.query().preload('turmas')
    }

    async store({request}){
        const dados =await request.validate(SalaValidator)

        return Sala.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Sala.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const sala = await Sala.findOrFail(id)

        return sala.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Sala.findOrFail(id)
        const dado = await request.only(['nome','capacidade','tipo'])
        
        return dados.merge(dado).save()
    }
}