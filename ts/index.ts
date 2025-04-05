require('dotenv').config();
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger';
import router from './route';
import os from 'os';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', router);

const PORT = parseInt(process.env.PORT || '3000', 10);
const localAddress = `http://localhost:${PORT}/docs`;
const networkInterfaces = os.networkInterfaces();
const ipAddress = Object.values(networkInterfaces)
    .flat()
    .find((iface) => iface?.family === 'IPv4' && !iface.internal)?.address;
const onlineAddress = ipAddress ? `http://${ipAddress}:${PORT}/docs` : 'IP address not available';

app.listen(PORT, () => {
    console.log(`O servidor está rodando em:`);
    console.log(`- Local: ${localAddress}`);
    console.log(`- Online: ${onlineAddress}`);
});