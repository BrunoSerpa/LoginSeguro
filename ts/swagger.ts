import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Segurança",
            version: "1.0.0",
            description: "Documentação da API de Segurança",
        },
    },
    apis: ["./js/route.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;