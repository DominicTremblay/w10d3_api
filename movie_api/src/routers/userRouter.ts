import { Router } from 'express';
import { createUser } from '../handlers/users';

const router = Router();

router.post('/', createUser);

export default router;
