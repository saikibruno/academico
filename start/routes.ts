/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/cursos','CursoController').apiOnly()

Route.resource('/disciplinas', 'DisciplinaController').apiOnly()

Route.resource('/salas', 'SalaController').apiOnly()

Route.resource('/semestres', 'SemestreController').apiOnly()

Route.resource('/professores', 'ProfessoreController').apiOnly()

Route.resource('/alunos', 'AlunoController').apiOnly()

Route.resource('/turmas', 'TurmaController').apiOnly()

Route.resource('/turma_alunos', 'TurmaAlunoController').apiOnly()

Route.resource('/aulas', 'AulaController').apiOnly()

Route.resource('/chamadas', 'ChamadaController').apiOnly()
