import express, { request, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT;
const name = process.env.NAME;
const version = process.env.VERSION;

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (_req: Request, res: Response) => { res.send(`Api: ${name} \n version: ${version}`) });

server.listen(port, () =>{
    console.log(`${name} on http://localhost:${port}/ `);
});