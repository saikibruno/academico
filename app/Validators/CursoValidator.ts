import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50)
    ]),
    duracao: schema.number.optional(),
    modalidade: schema.enum(['P', 'E', 'H'])
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    maxLength:'Número máximo de caracteres atingido.',
    enum:'Escolhas disponiveis {{options.choices}}'
  }
}
