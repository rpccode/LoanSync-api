import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { setupSwagger } from './swagger';
import routes from './routes';
import logger from './utils/loggers';

dotenv.config();  // Cargar variables de entorno

const app: Application = express();
const PORT = process.env.PORT || 3000;
setupSwagger(app);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/api', routes);

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
