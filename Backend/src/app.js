import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//Import Routes
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

const app = express();

//Use Cors
app.use(cors());



//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//Routes
//app.use(require('./routes/user.routes.js'));
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

export default app;