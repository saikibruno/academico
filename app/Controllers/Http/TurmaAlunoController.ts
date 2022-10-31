// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno"
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator"

export default class TurmaAlunoController {
    index() {
        return TurmaAluno.all()
    }

    async store({ request }) {
        const dados = await request.validate(TurmaAlunoValidator)

        return TurmaAluno.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return TurmaAluno.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await TurmaAluno.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await TurmaAluno.findOrFail(id)
        const dado = await request.only(['turmaId', 'alunoId'])

        return dados.merge(dado).save()
    }
}
