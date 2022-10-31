// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma"
import TurmaValidator from "App/Validators/TurmaValidator"

export default class TurmaController {
    index(){
        return Turma.query().preload('disciplina').preload('professores').preload('sala').preload('semestre').preload('alunos').preload('aulas')
    }
    
    async store({request}){
        const dados = await request.validate(TurmaValidator)

        return Turma.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Turma.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const dados = await Turma.findOrFail(id)

        return dados.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Turma.findOrFail(id)
        const dado = await request.only(['nome','professorId','semestreId','disciplinaId','salaId','turno'])
        
        return dados.merge(dado).save()
    }
}
