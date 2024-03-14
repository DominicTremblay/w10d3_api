import { Router } from 'express';
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../handlers/movies';

const router = Router();

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;
