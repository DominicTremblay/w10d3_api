import prisma from '../db';

export const getAllMovies = async (req, res) => {
  const movies = await prisma.movie.findMany({});

  res.json({ data: movies });
};

export const getMovieById = async (req, res) => {
  const id = Number(req.params.id);

  const movie = await prisma.movie.findUnique({
    where: { id },
  });

  res.json({ data: movie });
};

export const createMovie = async (req, res) => {
  const newMovie = {
    title: req.body.title,
    releaseDate: new Date(req.body.releaseDate),
    runtimeInMins: req.body.runtimeInMins,
  };

  const movie = await prisma.movie.create({
    data: newMovie,
  });

  res.json({ data: movie });
};

export const updateMovie = async (req, res) => {
  const id = Number(req.params.id);

  const updatedMovie = req.body;

  if (updatedMovie.releaseDate) {
    updatedMovie.releaseDate = new Date(req.body.releaseDate);
  }

  const movie = await prisma.movie.update({
    where: { id },
    data: updatedMovie,
  });

  res.json({ data: movie });
};

export const deleteMovie = async (req, res) => {
  const id = Number(req.params.id);

  const movie = await prisma.movie.delete({
    where: { id },
  });

  res.json({ data: movie });
};
