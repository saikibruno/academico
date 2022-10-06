// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno"

export default class TurmaAlunoController {
    index(){
        return TurmaAluno.all()
    }
    
    store({request}){
        const dados = request.only(['turmaId','alunoId'])

        return TurmaAluno.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return TurmaAluno.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const dados = await TurmaAluno.findOrFail(id)

        return dados.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await TurmaAluno.findOrFail(id)
        const dado = await request.only(['turmaId','alunoId'])
        
        return dados.merge(dado).save()
    }
}
