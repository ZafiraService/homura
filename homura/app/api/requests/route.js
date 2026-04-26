import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.request.findMany();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();

  const request = await prisma.request.create({
    data: {
      type: body.type,
      userId: body.userId,
      guildId: body.guildId
    }
  });

  return Response.json(request);
}