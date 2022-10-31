// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class DisciplinaController {
    index(){
        return Disciplina.query().preload('curso').preload('turmas')
    }

    async store({request}){
        const dados = await request.validate(DisciplinaValidator)

        return Disciplina.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Disciplina.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)

        return disciplina.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Disciplina.findOrFail(id)
        const dado = await request.only(['nome','cursoId'])
        
        return dados.merge(dado).save()
    }
}
