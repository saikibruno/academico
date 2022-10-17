
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>

# API Academico

API desenvolvida na materia de BACKEND do curso de Análise e Desenvolvimento de sistemas :computer:.

## Status do projeto

:construction: Projeto em construção :construction:


## :clipboard: Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Insomnia](https://insomnia.rest/download). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🔧 Instalação API

Depois de instalar as ferramentas anteriores executar esse passo a passo:

```
#Abra o terminal na pasta que deseja colocar o projeto.

#Faça o git clone.
git clone https://github.com/saikibruno/academico.git

#Depois de baixado entrar dentro da pasta.
cd academico
```
Instalar node_modules
```
npm install
```
Depois de instalado configurar o banco.
```
node ace configure @adonisjs/lucid
```
Selecione SQLite pressionado ESPAÇO depois ENTER. 
Vai perguntar onde deseja abrir as instruções selecione "In the terminal" e pressione ENTER

Procure na raiz um arquivo escrito .env colocar essa configuração dentro do arquivo.
```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=8sM4HhhIZI-8ijpCw8ndumaveH5td73W
DRIVE_DISK=local

DB_CONNECTION=sqlite
```
Executando migration
```
node ace migration:run
```
Executando Seed
```
node ace db:seed
```
Executar o projeto
```
node ace serve --watch
```
## 🔧 Instalação e configuração Insomnia
Baixar [Insomnia](https://insomnia.rest/download)

Depois de instalado abrir o aplicativo e criar um "Request Collection"

Dentro do "Request Collection" criar uma pasta para cada tabela exemplo:

<details><summary>Curso</summary>

Dentro da pasta Curso criar "New HTTP Request" para cada um desses.

- GET index   
- GET show  
- DEL destroy  
- POST store  
- PUT update 
  
</details>


## 🛠️ Construído com
#### **API**  ([AdonisJS](https://docs.adonisjs.com/guides/introduction)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[AdonisJS](https://docs.adonisjs.com/guides/introduction)**
-   **[Luxon](https://moment.github.io/luxon/#/install)**
-   **[SQLite](https://www.sqlite.org/index.html)**

> Veja o arquivo  [package.json](https://github.com/saikibruno/academico/blob/main/package.json)

## 📝 API http://localhost:3333/
<details><summary>Curso</summary>

- GET index 
  - /cursos
- GET show
  - /cursos/:id
- DEL destroy
  - /cursos/:id
- POST store
  - /cursos
- PUT update
  - /cursos/:id
  
</details>

<details><summary>Sala</summary>

- GET index 
  - /salas
- GET show
  - /salas/:id
- DEL destroy
  - /salas/:id
- POST store
  - /salas
- PUT update
  - /salas/:id
  
</details>

<details><summary>Disciplina</summary>

- GET index 
  - /disciplinas
- GET show
  - /disciplinas/:id
- DEL destroy
  - /disciplinas/:id
- POST store
  - /disciplinas
- PUT update
  - /disciplinas/:id
  
</details>

<details><summary>Semestre</summary>

- GET index 
  - /semestres
- GET show
  - /semestres/:id
- DEL destroy
  - /semestres/:id
- POST store
  - /semestres
- PUT update
  - /semestres/:id
  
</details>

<details><summary>Professor</summary>

- GET index 
  - /professores
- GET show
  - /professores/:id
- DEL destroy
  - /professores/:id
- POST store
  - /professores
- PUT update
  - /professores/:id
  
</details>

<details><summary>Aluno</summary>

- GET index 
  - /alunos
- GET show
  - /alunos/:id
- DEL destroy
  - /alunos/:id
- POST store
  - /alunos
- PUT update
  - /alunos/:id
  
</details>

<details><summary>Turma</summary>

- GET index 
  - /turmas
- GET show
  - /turmas/:id
- DEL destroy
  - /turmas/:id
- POST store
  - /turmas
- PUT update
  - /turmas/:id
  
</details>

<details><summary>Turma Aluno</summary>

- GET index 
  - /turma_alunos
- GET show
  - /turma_alunos/:id
- DEL destroy
  - /turma_alunos/:id
- POST store
  - /turma_alunos
- PUT update
  - /turma_alunos/:id
  
</details>

<details><summary>Turma Aluno</summary>

- GET index 
  - /turma_alunos
- GET show
  - /turma_alunos/:id
- DEL destroy
  - /turma_alunos/:id
- POST store
  - /turma_alunos
- PUT update
  - /turma_alunos/:id
  
</details>

<details><summary>Aula</summary>

- GET index 
  - /aulas
- GET show
  - /aulas/:id
- DEL destroy
  - /aulas/:id
- POST store
  - /aulas
- PUT update
  - /aulas/:id
  
</details>

<details><summary>Chamada</summary>

- GET index 
  - /chamadas
- GET show
  - /chamadas/:id
- DEL destroy
  - /chamadas/:id
- POST store
  - /chamadas
- PUT update
  - /chamadas/:id
  
</details>

## 📝 Licença
Este projeto esta sobe a licença [MIT](./LICENSE).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Bruno Saiki 👋🏽 entre em contato:

<a href="https://www.linkedin.com/in/bruno-saiki/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href = "mailto:saiki.bruno@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
