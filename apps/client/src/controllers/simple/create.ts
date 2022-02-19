import { Request, Response } from 'express';
import { OkSimple, ErrorHandler } from 'lib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCreate(req: Request) {
  const {
    code,
    endpoint,
    request_method,
    response_status_code,
    response_header,
    response_body,
    from,
  } = req.body;

  const qInsert = await prisma.simple.create({
    data: {
      code,
      endpoint,
      request_method,
      response_status_code,
      response_header: JSON.parse(response_header),
      response_body: JSON.parse(response_body),
      from,
    },
  });

  return qInsert.response_body;
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
