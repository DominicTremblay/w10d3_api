import { PrismaClient } from '@prisma/client';
import moviesData from './seeds/movies';
import actorsData from './seeds/actors';

const prisma = new PrismaClient();

async function main() {
  // run the seeds here

  await prisma.movie.createMany({
    data: moviesData,
  });

  await prisma.actor.createMany({
    data: actorsData,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
