# CRUD com MongoDB

## A seguinte API tem como propósito: 

* Testar conhecimento básico com o banco de dados não relacional **MongoDB**;
* Testar biblioteca **Mongoose**, para auxiliar o desenvolvimento com mongo.

## Modo de usar

1. Faça o clone do repositório;
2. Dentro do terminal do projeto digite `npm i` para baixar todas as dependências;
3. Crie um arquivo `.env` na pasta raiz do projeto;
4. Dentro do arquivo `.env`, crie as seguintes variáveis:
```
DB_USER = Seu Usuário no MongoD Atlas
DB_PASS = Sua senha do banco
DB_CLUSTER = Seu cluster do banco no MongoDB Atlas
PORT = Porta que irá rodar a aplicação
```
5. Após todos os passos anteriores, digite `npm start` para iniciar a **API** localmente;