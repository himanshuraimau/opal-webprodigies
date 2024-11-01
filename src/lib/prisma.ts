import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient | undefined 
};

export const client = 
  globalForPrisma.prisma ?? 
  new PrismaClient({
     log: ['query', 'info', 'warn', 'error']
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client;