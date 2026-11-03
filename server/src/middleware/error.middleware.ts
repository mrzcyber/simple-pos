import type {Request,Response,NextFunction} from 'express';
import {ResponseError} from '../error/response.error.js'
import {ZodError} from 'zod';

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof ZodError){
        return res.status(400).json({message: err.message});
    }
    else if(err instanceof ResponseError){
        return res.status(err.statusCode).json({message: err.message});
    }
    else{
        return res.status(500).json({message: err.message});
    }

}