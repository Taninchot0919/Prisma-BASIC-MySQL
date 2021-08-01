const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
    // ... you will write your Prisma Client queries here
    const allOrder = await prisma.orders.findMany({
        include: {
            Person: true
        }
    })
    console.log(allOrder)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
