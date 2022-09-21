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

Route.get('/cursos', 'CursoController.index')
Route.post('/cursos', 'CursoController.store')

Route.get('/disciplinas', 'DisciplinaController.index')
Route.post('/disciplinas', 'DisciplinaController.store')

Route.get('/salas', 'SalaController.index')
Route.post('/salas', 'SalaController.store')

Route.get('/semestres', 'SemestreController.index')
Route.post('/semestres', 'SemestreController.store')

Route.get('/professores', 'ProfessoreController.index')
Route.post('/professores', 'ProfessoreController.store')

Route.get('/alunos', 'AlunoController.index')
Route.post('/alunos', 'AlunoController.store')

Route.get('/turmas', 'TurmaController.index')
Route.post('/turmas', 'TurmaController.store')

Route.get('/turma_alunos', 'TurmaAlunoController.index')
Route.post('/turma_alunos', 'TurmaAlunoController.store')

Route.get('/aulas', 'AulaController.index')
Route.post('/aulas', 'AulaController.store')

Route.get('/chamadas', 'ChamadaController.index')
Route.post('/chamadas', 'ChamadaController.store')
