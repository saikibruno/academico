// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursosController {

    index(){
        return Curso.all()
    }
    /*
    store(){
        const dados = {nome: 'REDES', duracao:5,modalidade:'P'}
        
        return Curso.create(dados)
    }
     */
    store(){}
}
