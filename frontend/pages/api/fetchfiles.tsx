//@ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { title } = req.query;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    // Generate a direct URL to the file
    const fileUrl = `http://173.225.103.252:8080/files/${encodeURIComponent(title)}`;

    // Redirect client to the file URL
    res.redirect(fileUrl);
  } catch (error) {
    console.error('Error generating file URL:', error.message);
    res.status(500).json({ message: 'Internal server error while generating file URL' });
  }
}
