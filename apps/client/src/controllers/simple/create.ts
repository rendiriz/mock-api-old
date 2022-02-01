import { Request, Response } from 'express';
import { OkSimple, ErrorHandler } from 'lib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCreate(req: Request) {
  const { data, from } = req.body;

  const qInsert = await prisma.simple.create({
    data: {
      data: JSON.parse(data),
      from,
    },
  });

  return qInsert.data;
}

const create = async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    const qInsert = await getCreate(req);
    return OkSimple(qInsert, res);
  } catch (err) {
    return ErrorHandler(err, res);
  } finally {
    await prisma.$disconnect();
  }
};

export { create, getCreate };
