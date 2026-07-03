import express from 'express';
import cors from 'cors';
import userRoute from './routes/user.route.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Node.js MYSQL API' });
});

// Routes 
app.use('/api/users', userRoute); // http://localhost:5000/api/users

export default app;