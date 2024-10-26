import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.MONGODB_DATABASE_URL
    }
  }
})

async function testConnection() {
  try {
    // For MongoDB, we can test the connection by attempting to fetch a count
    // from any collection. Let's try with a simple query:
    const result = await prisma.$connect()
    console.log('Successfully connected to MongoDB')

    // Optional: Try a simple operation if you have any models defined
    // For example, if you have a User model:
    // const userCount = await prisma.user.count()
    // console.log('User count:', userCount)

  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()