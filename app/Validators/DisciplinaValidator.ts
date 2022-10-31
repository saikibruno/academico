import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class DisciplinaValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50)
    ]),
    cursoId: schema.number([
      rules.exists({ table: 'cursos', column: 'id' })
    ])
  })

  public messages: CustomMessages = {}
}
