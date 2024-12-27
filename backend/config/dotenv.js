
import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 3001;
export const db = {
    database: process.env.DB_NAME || 'mediatech' ,
    username: process.env.DB_USER  || 'mediatech',
    password: process.env.DB_PASS  || 'mediatech@123',
    host: process.env.DB_HOST || 'ANJANI/EXPRESS' ,
    dialect: process.env.DB_DIALECT  || 'mssql',
    port: process.env.DB_PORT || 1433,
};
