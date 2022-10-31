import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100)
    ]),

    cpf: schema.string([
      rules.maxLength(11),
      rules.minLength(11)
    ]),

    matricula: schema.string([
      rules.maxLength(20),
    ]),

    email: schema.string.optional({}, [
      rules.email(),
      rules.maxLength(100)
    ]),

    telefone: schema.string.optional([
      rules.maxLength(15),
    ]),

    cep: schema.number.optional([
    ]),

    logradouro: schema.string.optional([
      rules.maxLength(100),
    ]),

    complemento: schema.string.optional([
      rules.maxLength(100),
    ]),

    numero: schema.string.optional([
      rules.maxLength(120),
    ]),

    bairro: schema.string.optional([
      rules.maxLength(100),
    ]),
  })

  public messages: CustomMessages = {}
}
