# MERN_blog
 MERN Stack

##MongoDB:
 Banco de dados ñ relacional, faz query's e retornos utilizando JSON;

 MongoDB Atlas -> url: https://www.mongodb.com/atlas/database
 // comand: npm install mongodb
 user: root69, password: root69
 -Database
 -Collections
 -Documents

##Express:
 Framework para backend, agilizando a criação de API's REST, gerencia rotas e requisições;

 Uso de Thunder Client: simula um cliente
 Uso de criptografia para senha: bcrypt.js 
   (npm express, url: https://www.npmjs.com/package/bcrypt)
 JWT(Json Web Token) 
   url: https://www.npmjs.com/package/jsonwebtoken
   url: https://www.md5hashgenerator.com/


 API - Express (pasta: ./src)
 -models
    -User.js : parte da rota com bDD's
    -News.js : sobre as postagens e devidas interações
 -routes
    -user.route.js : cria rotas
    -auth.route.js : rota login
    -news.route.js : 
 -controllers
    -user.controller.js : função callback das rotas
    -auth.controller.js :
    -news.controller.js :
 -services
    -user.services.js : começo da rota com bDD's
    -auth.service.js : login + token de uso
    -news.service.js : 
 -database
    -db.js : para conectar com banco de dados, uso de mongoose
      .uso de .env (biblioteca: npm i dotenv)
 -middlewares
    -global.middlewares.js : coletania para funções que são mais útilizadas

##React:
 Framework para o frontend, acelera a produtividade do front, pois utilizar basicamente Javascript(JS);

 SPA - React
 -Componentes
 -Pages
 -Routers
 -Service

##Node.js:
 Ambiente de execução de códigos JS


// ROTA
    // Method HTTP - CRUD (create, read, update, delete)
        // GET - pega uma info
        // POST - cria uma info
        // PUT- altera toda a info
        // PATH - altera parte da info
        // DELETE - apaga uma info

    // Name - um id da rota

    // Function(Callback) - responsável por executar algum comando
