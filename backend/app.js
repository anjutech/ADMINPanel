import express, { json } from 'express';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js';
import cookieParser from 'cookie-parser';
import MenuRoutes from './routes/menuRoutes.js';
import SuperAdminRoutes from './routes/SuperAdminRoutes.js';
import ManagerAdminRoutes from './routes/ManagerAdminRoutes.js'
import CustomerRoutes from './routes/CustomerRoutes.js';
const app = express();

// Middleware
app.use(json());
app.use(
    cors({
      origin: 'http://localhost:5173', // Allow only this origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
      credentials: true, // Allow cookies and authentication headers
    })
  );
app.use(cookieParser());
app.options('*', cors()); // Preflight requests handler

// Routes
app.use('/auth', AuthRoutes);
app.use('/menu', MenuRoutes);
app.use('/SuperAdmin', SuperAdminRoutes);
app.use('/ManagerAdmin', ManagerAdminRoutes);
app.use('/CustomerRoutes', CustomerRoutes);

export default app;
