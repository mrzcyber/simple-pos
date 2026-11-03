import type {Request, Response, NextFunction} from 'express';
import {fromNodeHeaders}from 'better-auth/node';
import {auth} from '../lib/auth.js'

export async function betterAuth(req: Request, res: Response, next: NextFunction) {
    try{
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers)
        })
        
        if(!session){
           return res.status(401).json({message: 'Unauthorized'});
        }

        res.locals.session = session;
        next();
        
    }
    catch(error){
        next(error);
    }


}