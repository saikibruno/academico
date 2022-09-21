import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Aula.createMany([
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:1 },
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:2 },
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:3 },
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:4 },
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:2 },
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:3 },
      { data: DateTime.local(2022, 5, 15, 12, { locale: "br" }),conteudo:"Abla",turmaId:1 }
    ])
  }
}
