import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ msg: 'List of movies' });
});

export default router;