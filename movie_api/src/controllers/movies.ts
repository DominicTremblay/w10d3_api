import prisma from '../db';

export const getAllMovies = async (req, res) => {
  // writing our query using Prisma

  const movies = await prisma.movie.findMany({
    include: {
      casting: {
        include: {
          actor: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  });

  res.json({ data: movies });
};

export const getMovieById = async (req, res) => {
  const id = Number(req.params.id);

  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
  });

  res.json({ data: movie });
};
export const createMovie = async (req, res) => {
  const movie = await prisma.movie.create({
    data: {
      title: req.body.title,
      runtimeinMins: req.body.runtimeinMins,
      releaseDate: new Date(req.body.releaseDate),
    },
  });

  res.json({ data: movie });
};
export const updateMovie = async (req, res) => {
  const id = Number(req.params.id);

  if (req.body.releaseDate) {
    req.body.releaseDate = new Date(req.body.releaseDate);
  }

  const movie = await prisma.movie.update({
    where: { id },
    data: req.body,
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
