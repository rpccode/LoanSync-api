// src/utils/logger.ts
import winston from 'winston';
import 'winston-daily-rotate-file';

// Definir colores para los diferentes niveles de log
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
  }
};

// Agregar colores personalizados a Winston
winston.addColors(customLevels.colors);

// Crear la instancia de logger
const logger = winston.createLogger({
  levels: customLevels.levels,  // Usar los niveles personalizados
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),  // Añadir timestamp
    winston.format.colorize(),  // Colorear la consola
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    // Imprimir los logs en la consola
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' // En producción, solo mostrar 'info' y superiores
    }),

    // Guardar logs en archivos, rotando diariamente
    new winston.transports.DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',  // Tamaño máximo de cada archivo
      maxFiles: '14d'  // Mantener archivos por 14 días
    }),

    // Guardar logs de errores en un archivo separado
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    })
  ]
});

// Exportar el logger para su uso en toda la aplicación
export default logger;
