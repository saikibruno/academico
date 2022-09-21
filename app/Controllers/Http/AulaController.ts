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
}
