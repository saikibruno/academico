import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma'
import Chamada from './Chamada'
import Aluno from './Aluno'

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: DateTime

  @column()
  public conteudo: string

  @column()
  public turmaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Turma)
  public turma: BelongsTo<typeof Turma>

  @manyToMany(() => Chamada)
  public chamadas: ManyToMany<typeof Chamada>

  @manyToMany(() => Aluno, {
    pivotTable: 'chamadas',
  })
  public alunos: ManyToMany<typeof Aluno>
}
