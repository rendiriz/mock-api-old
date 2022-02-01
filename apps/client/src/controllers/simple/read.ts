import { Request, Response } from 'express';
import { OkSimple, ErrorHandler, ErrorNotFound } from 'lib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getRead(req: Request) {
  const { uniq } = req.params;

  const qRead = await prisma.simple.findFirst({
    where: {
      id: uniq,
      isActive: true,
    },
    select: {
      data: true,
    },
  });

  return qRead;
}

const read = async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    const qRead = await getRead(req);

    if (qRead) {
      return OkSimple(qRead?.data, res);
    }

    return ErrorNotFound('Data not found.', res);
  } catch (err) {
    return ErrorHandler(err, res);
  } finally {
    await prisma.$disconnect();
  }
};

export { read, getRead };
