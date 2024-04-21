import { PrismaClient } from "@prisma/client";

/**
 * Nextjs Route for search bulletins
 * @param {*} req 
 * @param {*} res 
 */
export default async function handler(req, res) {
  if (req.method === "GET") {
    const prisma = new PrismaClient();
    const { query } = req.query;
    try {
      const filteredBulletins = await prisma.bulletin.findMany({
        where: {
          OR: [
            { title: { contains: query } },
            { description: { contains: query } },
          ],
        },
      });
      res.status(200).json({ bulletins: filteredBulletins });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
