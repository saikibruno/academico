import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Diciplina from 'App/Models/Diciplina'

export default class extends BaseSeeder {
  public async run () {
    await Diciplina.createMany([
      {nome: "FRONTEND", cursoId: 1},
      {nome: "BACKEND", cursoId: 1},
      {nome: "LEI ORGANICA DF", cursoId: 5},
      {nome: "ANATOMIA", cursoId: 6},
    ])
  }
}
