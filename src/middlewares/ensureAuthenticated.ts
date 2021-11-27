import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import 'dotenv/config';

interface IPayload {
    id: string;
    name: string;
    email: string;
}

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const token = authToken.split(' ')[1];
    const TOKEN_SECRET = process.env.TOKEN_SECRET;

    try {
        const { id, email, name } = verify(token, TOKEN_SECRET) as IPayload;

        req.user_id = id;
        req.user_name = name;
        req.user_email= email;

        return next();

    } catch(err) {
        return res.status(401).end();
    }
}

export default ensureAuthenticated;