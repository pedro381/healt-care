const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0', // Especificação OpenAPI
    info: {
      title: 'Nome do seu Projeto',
      version: '1.0.0',
      description: 'Descrição do seu projeto',
    },
  },
  apis: ['./rotas/*.js'], // Caminho para os arquivos de rota do seu projeto
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
