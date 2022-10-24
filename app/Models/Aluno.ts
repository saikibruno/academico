import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma'
import Aula from './Aula'


export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public matricula: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public cep: number

  @column()
  public logradouro: string

  @column()
  public complemento: string

  @column()
  public numero: string

  @column()
  public bairro: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @manyToMany(() => Turma, {
    pivotTable: 'turma_alunos',
  })
  public turmas: ManyToMany<typeof Turma>

  @manyToMany(() => Aula, {
    pivotTable: 'chamadas',
  })
  public aulas: ManyToMany<typeof Aula>

}
