import express from 'express'
import { routerUser } from './routes/user.routes';

const app = express()

app.use(express.json())
app.use("/user", routerUser);

app.listen(8080, ()=>{
    console.log("Servidor rodando! http://localhost:8080");
})