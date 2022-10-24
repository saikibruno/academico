// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursoController {

    index(){
        return Curso.query().preload('disciplinas')
    }
    
    store({request}){
        const dados = request.only(['nome','duracao','modalidade'])

        return Curso.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Curso.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        return curso.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Curso.findOrFail(id)
        const dado = await request.only(['nome','duracao','modalidade'])
        
        return dados.merge(dado).save()
    }
    
}
