// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"
import AulaValidator from "App/Validators/AulaValidator"

export default class AulaController {
    index() {
        return Aula.query().preload('alunos').preload('turma')
    }

    async store({ request }) {
        const dados = await request.validate(AulaValidator)

        return Aula.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Aula.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Aula.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Aula.findOrFail(id)
        const dado = await request.only(['data', 'conteudo', 'turmaId'])

        return dados.merge(dado).save()
    }
}
