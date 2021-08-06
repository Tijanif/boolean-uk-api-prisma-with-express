const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  // Prisma create query to seed models in database

  const myBook = await prisma.book.create({
    // where: { name: 'James Bond' },
    data: {
      name: 'James Bond',
      author: 'Tati',
      type: 'fiction',
      topic: 'Horror',
    },
  });

  const mySecondBook = await prisma.book.create({
    // where: { name: 'James Dean' },
    data: {
      name: 'James Dean',
      author: 'Tati',
      type: 'non fiction',
      topic: 'drama',
    },
  });

  console.log({ myBook, mySecondBook });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = {
  seed,
};
