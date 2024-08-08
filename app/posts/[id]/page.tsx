import DOMPurify from 'isomorphic-dompurify';

import prisma from '@/lib/prisma';
import PostHeader from '@/app/_components/PostHeader';
import Container from '@mui/material/Container';

import styles from './styles.module.scss';

export default async function Post({ params }: Params) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id
    }
  });

  if (!post) {
    return <>Not found</>
  }

  return (
    <>
      <PostHeader title={post.title} imageUrl={post.imageUrl} subtitle={post.createdAt.toLocaleDateString()} />
      <Container className={styles.container}>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content ?? '') }}></div>
      </Container>
    </>
  );
}

type Params = {
  params: {
    id: string;
  };
};
