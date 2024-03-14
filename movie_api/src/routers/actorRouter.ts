import { Router } from 'express';
import {
  createActor,
  deleteActor,
  getActorById,
  getAllActors,
  updateActor,
} from '../handlers/actors';

const router = Router();

router.get('/', getAllActors);
router.get('/:id', getActorById);
router.post('/', createActor);
router.put('/:id', updateActor);
router.delete('/:id', deleteActor);

export default router;
