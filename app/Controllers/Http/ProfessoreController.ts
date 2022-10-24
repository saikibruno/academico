// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professore from "App/Models/Professore"

export default class ProfessoreController {
    index(){
        return Professore.query().preload('turmas')
    }

    store({request}){
        const dados = request.only(['nome','cpf','matricula','salario','email','telefone','cep','logradouro','complemento','numero','bairro'])
        
        return Professore.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Professore.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const dados = await Professore.findOrFail(id)

        return dados.delete()
    }

    async update({request}){
        const id = request.param('id')
        const dados = await Professore.findOrFail(id)
        const dado = await request.only(['nome','cpf','matricula','salario','email','telefone','cep','logradouro','complemento','numero','bairro'])
        
        return dados.merge(dado).save()
    }
}
