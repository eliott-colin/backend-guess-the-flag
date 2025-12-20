const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Guess The Flag",
      version: "1.0.0",
      description: "Documentation automatique de l'API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // chemins vers tes routes
};

module.exports = swaggerJsdoc(options);
