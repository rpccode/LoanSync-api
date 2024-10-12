import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env
dotenv.config();

// Crear el DataSource usando las variables de entorno
const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as 'mysql',  // TypeORM espera el tipo como un string literal
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),  // Convertir el puerto a número
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/entities/*.ts'],  // Aquí defines tus entidades
  synchronize: true,  // Solo en desarrollo, no lo uses en producción
});

AppDataSource.initialize()
  .then(() => {
    console.log('MySQL connected');
  })
  .catch((error) => console.log('Error during Data Source initialization:', error));
