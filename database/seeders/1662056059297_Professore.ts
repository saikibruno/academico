import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run() {
    await Professore.createMany([
      { nome: "Orion", cpf: 14469494186, matricula: "123456789", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Bruno", cpf: 24469494186, matricula: "123456788", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Joao", cpf: 34469494186, matricula: "123456787", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Marina", cpf: 44469494186, matricula: "123456786", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Cassio", cpf: 54469494186, matricula: "123456785", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Elias", cpf: 64469494186, matricula: "123456784", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Maria", cpf: 74469494186, matricula: "123456783", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Luana", cpf: 84469494186, matricula: "123456782", salario: "20000", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
    ])
  }
}
