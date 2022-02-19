import { Request, Response } from 'express';
import { ErrorHandler, ErrorNotFound } from 'lib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getRead(req: Request) {
  const { code, endpoint } = req.params;

  const qRead = await prisma.simple.findFirst({
    where: {
      code,
      endpoint,
      isActive: true,
    },
    select: {
      response_status_code: true,
      response_header: true,
      response_body: true,
    },
  });

  return qRead;
}

const read = async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    const qRead = await getRead(req);

    if (qRead) {
      return res
        .status(Number(qRead.response_status_code))
        .header(qRead.response_header)
        .send(qRead.response_body);
    }

    return ErrorNotFound('Data not found.', res);
  } catch (err) {
    return ErrorHandler(err, res);
  } finally {
    await prisma.$disconnect();
  }
};

export { read, getRead };
