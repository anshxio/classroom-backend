import express from "express";
import subjectsRouter from './routes/subjects';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use('/api/subjects', subjectsRouter);

app.get('/', (req,res)=>{
    res.send('Hello , Welcome  to the classroom Api');
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});