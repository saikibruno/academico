// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";
import SemestreValidator from "App/Validators/SemestreValidator";

export default class SemestreController {
    index() {
        return Semestre.query().preload('turmas')
    }

    async store({ request }) {
        const dados = await request.validate(SemestreValidator)

        return Semestre.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Semestre.findOrFail(id)
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Semestre.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Semestre.findOrFail(id)
        const dado = await request.only(['nome', 'dataInicio', 'dataFim'])

        return dados.merge(dado).save()
    }
}
