import { PrismaClient } from "@prisma/client";
import cloudinary from "cloudinary";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const upload = multer({ dest: "uploads/" });

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    try {
      const bulletinPosts = await prisma.bulletin.findMany({
        orderBy: {
          creationDate: 'desc'
        }
      });
      res.status(200).json({ bulletinPosts });
    } catch (e) {
      res.status(500).json(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  if (req.method === "POST") {
    try {
      upload.single("image")(req, res, async (err) => {
        if (err) {
          return res
            .status(500)
            .json({ success: false, error: "Upload error" });
        }

        const { title, description } = req.body;

        let cloudinaryResponse;
        if (req.file) {
          cloudinaryResponse = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload(req.file.path, (error, result) => {
              if (error) return reject(error);
              resolve(result);
            });
          });
        }

        const newBulletinPost = await prisma.bulletin.create({
          data: {
            title,
            description,
            image: cloudinaryResponse?.secure_url ?? null,
          },
        });

        res.status(201).json({ bulletinPost: newBulletinPost });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Server error" });
    }finally {
      await prisma.$disconnect();
    }
  }
}
