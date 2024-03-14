import { PrismaClient } from '@prisma/client';
import { moviesData } from './seeds/movies';
import { actorsData } from './seeds/actors';
import { castingData } from './seeds/casting';

const prisma = new PrismaClient();

async function main() {
  // run the seed query here
  await prisma.movie.createMany({
    data: moviesData,
  });

  await prisma.actor.createMany({
    data: actorsData,
  });

  await prisma.casting.createMany({
    data: castingData,
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
