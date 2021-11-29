<h1 align="center">
    Projeto de avaliação técnica Backend
    <h6 align="center">Tecnologias usadas: NodeJS, TypeScript, Express, TypeORM e MySQL</h6>
</h1>

### Executando a API

Primeiramente instale as dependências com o comando ```npm install```, em seguida crie um arquivo ```.env``` na raiz passando as informações necessárias como o ```.env.sample``` exemplifica:

```
    API_PORT=3333

    TOKEN_SECRET="desafio-liven"

    DATABASE_HOST="localhost"
    DATABASE_PORT=3306
    DATABASE_USERNAME="root"
    DATABASE_PASSWORD="password"
    DATABASE_NAME="dev"

    DATABASE_TEST_NAME="test"
```

Depois de configurado o seu banco de dados *MySQL* rode as *migrations* com o comando ```npm run typeorm migration:run``` e você estará pronto para rodar o servidor. Para rodar o servidor de desenvolvimento utilize o comando ```npm run dev:server```, para buildar e rodar o servidor de produção utilize ```npm start```.

### Endpoints da API

Em seu navegador acesse o Endpoint */api-docs* para ter acesso a documentação das rotas e as instruções de como usá-las (documentação gerada pelo Swagger).

### Rodando os Testes automatizados

Para rodar os testes utilize o comando ```npm run test```, verifique se você já possui um banco de dados para testes configurado no ```.env```.