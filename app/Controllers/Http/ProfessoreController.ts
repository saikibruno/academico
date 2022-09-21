// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professore from "App/Models/Professore"

export default class ProfessoreController {
    index(){
        return Professore.all()
    }

    store({request}){
        const dados = request.only(['nome','cpf','matricula','salario','email','telefone','cep','logradouro','complemento','numero','bairro'])
        //"nome","cpf","matricula","salario","email","telefone","cep","logradouro","complemento","numero","bairro"
        return Professore.create(dados)
    }
}
