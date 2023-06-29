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

 Uso de Thunder Client:


 API - Express (pasta: ./src)
 -models
    -User.js : parte da rota com bDD's
 -routes
    -user.route.js : cria rotas
 -controllers
    -user.controller.js : função callback das rotas
 -services
    -user.services.js : começo da rota com bDD's
 -database
    -db.js : para conectar com banco de dados, uso de mongoose
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



