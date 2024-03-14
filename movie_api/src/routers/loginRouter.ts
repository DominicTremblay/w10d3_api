import { Router } from 'express';
import { signing } from '../handlers/login';

const router = Router();

router.post('/', signing);

export default router;
