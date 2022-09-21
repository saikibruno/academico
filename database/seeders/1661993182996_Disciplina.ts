import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: "FRONTEND", cursoId: 1},
      {nome: "BACKEND", cursoId: 1},
      {nome: "LEI ORGANICA DF", cursoId: 5},
      {nome: "ANATOMIA", cursoId: 6},
    ])
  }
}
