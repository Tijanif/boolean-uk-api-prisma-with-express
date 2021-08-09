const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  // Prisma create query to seed models in database

  const myBook = await prisma.book.create({
    data: {
      name: 'Lost in the world',
      author: 'Lucy doll',
      type: 'fiction',
      topic: 'Horror',
    },
  });

  const mySecondBook = await prisma.book.create({
    data: {
      name: 'There and back again',
      author: 'Tati',
      type: 'non fiction',
      topic: 'drama',
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = seed;
