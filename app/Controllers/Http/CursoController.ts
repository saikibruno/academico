// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursoController {

    index(){
        return Curso.all()
    }
    
    store({request}){
        const dados = request.only(['nome','duracao','modalidade'])

        return Curso.create(dados)
    }
}
