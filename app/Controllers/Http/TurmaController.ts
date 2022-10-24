// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma"

export default class TurmaController {
    index(){
        return Turma.query().preload('disciplina').preload('professores').preload('sala').preload('semestre').preload('alunos').preload('aulas')
    }
    
    store({request}){
        const dados = request.only(['nome','professorId','semestreId','disciplinaId','salaId','turno'])

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
