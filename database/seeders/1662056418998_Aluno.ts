import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run() {
    await Aluno.createMany([
      { nome: "Teles", cpf: 14469494186, matricula: "123456789", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Junior", cpf: 21469494186, matricula: "123456788", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Jeremias", cpf: 32469494186, matricula: "123456787", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Cassiano", cpf: 43469494186, matricula: "123456786", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Eliza", cpf: 52469494186, matricula: "123456785", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Izabel", cpf: 65469494186, matricula: "123456784", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Joaquina", cpf: 76469494186, matricula: "123456783", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
      { nome: "Maria", cpf: 87469494186, matricula: "123456782", email: "email@email.com", telefone: "61987359699", cep: 70767550, logradouro: "Avenida", complemento: "lado direito", numero: "40", bairro: "Asa norte" },
    ])
  }
}
