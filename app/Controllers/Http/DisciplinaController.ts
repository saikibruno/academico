// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinaController {
    index(){
        return Disciplina.all()
    }

    store({request}){
        const dados = request.only(['nome','cursoId'])

        return Disciplina.create(dados)
    }
}
