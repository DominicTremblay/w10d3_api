import prisma from '../db';

export const getAllActors = async (req, res) => {
  // writing our query using Prisma

  const actors = await prisma.actor.findMany({
    include: {
      casting: {
        include: {
          movie: {
            select: {
              title: true
            }
          }
        },
      },
    },
  });

  res.json({ data: actors });
};

export const getActorById = async (req, res) => {
  const id = Number(req.params.id);

  const actor = await prisma.actor.findUnique({
    where: {
      id,
    },
  });

  res.json({ data: actor });
};
export const createActor = async (req, res) => {
  const actor = await prisma.actor.create({
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: new Date(req.body.dateOfBirth),
    },
  });

  res.json({ data: actor });
};
export const updateActor = async (req, res) => {
  const id = Number(req.params.id);

  if (req.body.dateOfBirth) {
    req.body.dateOfBirth = new Date(req.body.dateOfBirth);
  }

  const actor = await prisma.actor.update({
    where: { id },
    data: req.body,
  });

  res.json({ data: actor });
};
export const deleteActor = async (req, res) => {
  const id = Number(req.params.id);

  const actor = await prisma.actor.delete({
    where: { id },
  });

  res.json({ data: actor });
};
