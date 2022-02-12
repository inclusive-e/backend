import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seeding data here
  process.exit(0);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
