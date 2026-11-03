import express from 'express';
import {toNodeHandler} from 'better-auth/node';
import {auth} from './lib/auth.js'
import { apiRouter } from './route/index.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const app = express();
const port = process.env.PORT

app.all("/api/auth/*splat", toNodeHandler(auth)); 
app.use(express.json());
app.use("/api", apiRouter);
app.use(errorMiddleware);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
