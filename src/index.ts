import sequelize from './Models/connect';

import express from 'express';
import router from './Routes/routes';


const app = express();
const PORT = process.env.PORT || 3000; // Define a porta do servidor, padrão 3000

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());
app.use(router);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello from your TypeScript Express project!');
});

// Inicia o servidor
// Sincroniza os modelos com o banco de dados (cria as tabelas se não existirem)
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
