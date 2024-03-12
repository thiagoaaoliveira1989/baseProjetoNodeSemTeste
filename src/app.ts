import express, { json } from 'express';
import helmet from 'helmet'
import cors from "cors";


const app = express();
app.use(json());
app.use(helmet());
app.use(cors());


const port = 3000;

app.listen(port, () => {
    console.log("Api Started on port ${port}");
})