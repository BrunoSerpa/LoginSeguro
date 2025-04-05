# Projeto de Segurança

Este projeto é uma API desenvolvida em Node.js com TypeScript, que utiliza o banco de dados PostgreSQL para gerenciar usuários. Ele possui funcionalidades de criação de usuários, listagem de usuários e login. Além disso, a API está documentada utilizando Swagger.

## Índice

- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Explicação dos Arquivos](#explicação-dos-arquivos)
- [Configuração do Arquivo `.env`](#configuração-do-arquivo-env)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)


## Como Rodar o Projeto

### Pré-requisitos

1. Node.js.
2. PostgreSQL
3. Configuração das credenciais no arquivo `.env`.

### Passos para Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/BrunoSerpa/LoginSeguro
   cd LoginSeguro
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
   - Certifique-se de que o PostgreSQL está rodando.
   - Crie o banco de dados e a tabela executando o script SQL no arquivo `index.sql`.

4. Configure o arquivo `.env` com as credenciais do banco de dados e a porta do servidor.

5. Compile o TypeScript e inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse a documentação da API no navegador:
   ```
   http://localhost:3000/docs
   ```

[Voltar ao topo](#índice)

## Explicação dos Arquivos

### `index.ts`
Arquivo principal que inicializa o servidor Express, configura os middlewares e define as rotas. Também exibe os endereços locais e online para acessar a documentação da API.

### `.gitignore`
Define os arquivos e diretórios que não devem ser versionados, como `node_modules/`, arquivos `.env` e a saída do TypeScript (`js/`).

### `tsconfig.json`
Configurações do compilador TypeScript, como o diretório de entrada (`ts/`) e saída (`js/`), além de outras opções de compilação.

### `package.json` e `package-lock.json`
Gerenciam as dependências do projeto e scripts de execução. O script `start` compila o TypeScript e executa o servidor.

### `.env`
Arquivo de configuração para variáveis de ambiente, como credenciais do banco de dados e a porta do servidor.

### `index.sql`
Script SQL para criar a tabela `UserTable` no banco de dados PostgreSQL. Contém as colunas `id`, `email_user`, `password_user` e `name_user`.

### `functions.ts`
Contém funções auxiliares para interagir com o banco de dados, como:
- `getAllUsers`: Retorna todos os usuários.
- `createUser`: Cria um novo usuário.
- `login`: Realiza o login de um usuário.

### `query.ts`
Gerencia a conexão com o banco de dados PostgreSQL utilizando o pacote `pg`. Exporta a função `query` para executar comandos SQL.

### `swagger.ts`
Configura a documentação da API utilizando Swagger. Define as opções e gera a documentação com base nas rotas.

### `route.ts`
Define as rotas da API:
- `GET /users`: Lista todos os usuários.
- `POST /users`: Cria um novo usuário.
- `POST /login`: Realiza o login de um usuário.
Inclui também a documentação Swagger para cada rota.

[Voltar ao topo](#índice)

---

## Configuração do Arquivo `.env`

O arquivo `.env` é utilizado para configurar as variáveis de ambiente do projeto. Abaixo estão as credenciais que devem ser especificadas:

- `PORT`: Porta onde o servidor será executado. Exemplo: `3000`.
- `HOSTBD`: Host do banco de dados PostgreSQL. Exemplo: `localhost`.
- `USERBD`: Usuário do banco de dados PostgreSQL. Exemplo: `postgres`.
- `PASSWORDBD`: Senha do banco de dados PostgreSQL. Exemplo: `senha123`.
- `DATABASE`: Nome do banco de dados. Exemplo: `sqlinjection`.
- `PORTBD`: Porta do banco de dados PostgreSQL. Exemplo: `5433`.

Exemplo de configuração do arquivo `.env`:

```
PORT = '3000'
HOSTBD = 'localhost'
USERBD = 'postgres'
PASSWORDBD = 'senha123'
DATABASE = 'sqlinjection'
PORTBD = '5433'
```

Certifique-se de ajustar os valores conforme a configuração do seu ambiente.

[Voltar ao topo](#índice)

---

## Funcionalidades

- **Listar Usuários**: Retorna todos os usuários cadastrados no banco de dados.
- **Criar Usuário**: Permite criar um novo usuário com `email_user`, `password_user` e `name_user`.
- **Login**: Verifica as credenciais do usuário e retorna o nome do usuário caso sejam válidas.

[Voltar ao topo](#índice)

---

## Tecnologias Utilizadas

- **Node.js** e **Express**: Para criar o servidor e gerenciar as rotas.
- **TypeScript**: Para tipagem estática e melhor manutenção do código.
- **PostgreSQL**: Banco de dados relacional para armazenar os usuários.
- **Swagger**: Para documentar a API.
- **dotenv**: Para gerenciar variáveis de ambiente.

[Voltar ao topo](#índice)