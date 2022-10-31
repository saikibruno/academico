// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"
import AlunoValidator from "App/Validators/AlunoValidator"

export default class AlunoController {
    index() {
        return Aluno.query().preload('turmas').preload('aulas').paginate(1, 2)
    }

    async store({ request }) {
        const dados = await request.validate(AlunoValidator)

        return Aluno.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Aluno.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Aluno.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Aluno.findOrFail(id)
        const dado = await request.only(['nome', 'cpf', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        return dados.merge(dado).save()
    }
}
