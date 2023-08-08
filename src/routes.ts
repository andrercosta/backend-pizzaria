import {Router,Request, Response}from 'express';
import { CreateUserController } from './controllers/users/CreateUserController';
import { AuthUserController } from './controllers/users/AuthUserController';

const router = Router();


router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'It works!'});   
});

router.post('/users',new CreateUserController().handle);
router.post('/session',new AuthUserController().handle);



export { router}