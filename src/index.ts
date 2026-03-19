import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello , Welcome  to the classroom Api');
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});