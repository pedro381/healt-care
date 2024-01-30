const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const publicPath = path.join(__dirname, 'public');

const open = require('open');
open('http://localhost:3000/doc');

const { specs, swaggerUi } = require('./swagger.js');

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(specs));

const adminRoutes = require('./rotas/admin');
const usuarioRoutes = require('./rotas/usuario');
const equipeRoutes = require('./rotas/equipes');
const colaboradorRoutes = require('./rotas/colaborador');
const servicoTipoRoutes = require('./rotas/servicoTipo');
const servicoRoutes = require('./rotas/servico');

app.use('/admin', adminRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/equipe', equipeRoutes);
app.use('/colaborador', colaboradorRoutes);
app.use('/servico-tipo', servicoTipoRoutes);
app.use('/servico', servicoRoutes);

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo à página principal!');
});

// Configuração para iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

