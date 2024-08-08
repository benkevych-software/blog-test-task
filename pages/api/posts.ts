import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import prisma from '@/lib/prisma';


const apiRoute = createRouter<NextApiRequest, NextApiResponse>();

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, imageUrl, content } = JSON.parse(req.body);

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creating post' });
  }
});


apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchTerm } = req.query;

  try {
    const query = searchTerm
      ? {
          where: {
            title: {
              contains: searchTerm as string,
              mode: 'insensitive',
            }
          }
        } as const
      : undefined;

    const posts = await prisma.post.findMany(query);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch posts' });
  }
});

export default apiRoute.handler();