import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50)
    ]),
    turno: schema.string([
      rules.maxLength(1)
    ]),
    professoreId: schema.number([
      rules.exists({ table: 'professores', column: 'id' })
    ]),
    semestreId: schema.number([
      rules.exists({ table: 'semestres', column: 'id' })
    ]),
    disciplinaId: schema.number([
      rules.exists({ table: 'disciplinas', column: 'id' })
    ]),
    salaId: schema.number([
      rules.exists({ table: 'salas', column: 'id' })
    ])
  })

  public messages: CustomMessages = {}
}
