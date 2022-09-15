import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome:"1",professorId:1,semestreId:1,diciplinaId:1,salaId:1,turno:"M"},
      {nome:"2",professorId:2,semestreId:2,diciplinaId:1,salaId:2,turno:"N"},
      {nome:"3",professorId:3,semestreId:3,diciplinaId:2,salaId:3,turno:"M"},
      {nome:"4",professorId:4,semestreId:4,diciplinaId:2,salaId:4,turno:"N"},
      {nome:"5",professorId:5,semestreId:5,diciplinaId:3,salaId:5,turno:"N"},
      {nome:"6",professorId:6,semestreId:6,diciplinaId:1,salaId:6,turno:"N"},
    ])
  }
}
