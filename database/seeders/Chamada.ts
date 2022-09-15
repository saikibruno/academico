import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
    await Chamada.createMany([
      {aulaId:1,alunoId:2,presenca:"P"},
      {aulaId:2,alunoId:2,presenca:"P"},
      {aulaId:3,alunoId:2,presenca:"F"},
      {aulaId:4,alunoId:2,presenca:"P"},
      {aulaId:5,alunoId:2,presenca:"P"},
      {aulaId:6,alunoId:2,presenca:"P"},
      {aulaId:7,alunoId:2,presenca:"P"}
    ])
  }
}
