import express from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';
import {db} from './db/index.js';

const app = express();
const port = process.env.PORT

app.use(express.json());


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
