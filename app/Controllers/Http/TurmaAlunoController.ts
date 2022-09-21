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
}
