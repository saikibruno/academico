import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
   await Curso.createMany([
      {nome: "BANCO", duracao: 4,modalidade:'P'},
      {nome: 'REDES', duracao:5,modalidade:'E'},
      {nome: 'DIREITO', duracao:10,modalidade:'P'},
      {nome: 'ENFERMAGEM', duracao:10,modalidade:'P'},
      {nome: 'ADMINISTRACAO', duracao:8,modalidade:'E'},
      {nome: 'PSICOLOGIA', duracao:8,modalidade:'P'},
      {nome: 'ED.FISICA', duracao:8,modalidade:'H'},
      {nome: 'FILOSOFIA', duracao:8,modalidade:'H'},
    ])
  }
}
