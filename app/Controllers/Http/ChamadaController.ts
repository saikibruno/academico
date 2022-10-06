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

    show({request}){
        const id = request.param('id')
        return Chamada.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const dados = await Chamada.findOrFail(id)

        return dados.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Chamada.findOrFail(id)
        const dado = await request.only(['aulaId','alunoId','presenca'])
        
        return dados.merge(dado).save()
    }
}
