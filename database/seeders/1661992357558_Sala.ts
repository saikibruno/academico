import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome:"sala 1", capacidade:30,tipo:"P"},
      {nome:"sala 2", capacidade:10,tipo:"E"},
      {nome:"sala 3", capacidade:50,tipo:"A"},
      {nome:"sala 4", capacidade:40,tipo:"B"},
      {nome:"sala 5", capacidade:60,tipo:"T"},
      {nome:"sala 6", capacidade:100,tipo:"P"}
    ])
  }
}
