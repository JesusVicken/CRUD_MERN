import express from "express";
import cors from 'cors';
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json()); // habilitar modo json para post e putty
app.use(cors()); //evita conflitos rodando localmente de acesso

app.use("/", userRoutes); // rota simples apenas pra usuários
app.listen(8800); //app escutando essa porta