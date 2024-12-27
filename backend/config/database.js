
import { Sequelize } from 'sequelize';
import { db } from './dotenv.js';

const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    port: db.port,
    dialectOptions: {
        options: {
            trustServerCertificate: true,
        },
    },
});

// Db Connection
sequelize.authenticate()
    .then(() => console.log('Connected to the database!' ))
    .catch(err => console.error('Unable to connect to the database:', err));

    // Synchronize database
   sequelize.sync()
        .then(() => console.log('Database synchronized.'))
        .catch(err => console.error('Error synchronizing database:', err));
    
    
export default sequelize;
