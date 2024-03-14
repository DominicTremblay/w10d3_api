-- CreateTable
CREATE TABLE "Casting" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "actorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Casting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Casting" ADD CONSTRAINT "Casting_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Casting" ADD CONSTRAINT "Casting_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
