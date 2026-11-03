import express from 'express';
import {betterAuth} from '../middleware/auth.middleware.js'

export const apiRouter = express.Router();

apiRouter.use(betterAuth);

apiRouter.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});
