import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome:"1",professoreId:1,semestreId:1,disciplinaId:1,salaId:1,turno:"M"},
      {nome:"2",professoreId:2,semestreId:2,disciplinaId:1,salaId:2,turno:"N"},
      {nome:"3",professoreId:3,semestreId:3,disciplinaId:2,salaId:3,turno:"M"},
      {nome:"4",professoreId:4,semestreId:4,disciplinaId:2,salaId:4,turno:"N"},
      {nome:"5",professoreId:5,semestreId:5,disciplinaId:3,salaId:5,turno:"N"},
      {nome:"6",professoreId:6,semestreId:6,disciplinaId:1,salaId:6,turno:"N"},
    ])
  }
}
