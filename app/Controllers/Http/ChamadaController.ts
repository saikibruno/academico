// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada"

export default class ChamadaController {
    index(){
        return Chamada.all()
    }
    
    store({request}){
        const dados = request.only(['aulaId','alunoId','presenca'])

        return Chamada.create(dados)
    }
}
