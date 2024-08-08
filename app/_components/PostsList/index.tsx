import Container from '@mui/material/Container';
import PostItem from '../PostItem';

import styles from './styles.module.scss';

export default function PostsList({ posts }: Params) {

  return (
    <Container className={styles.container}>
			{posts?.map((post: Post) => <PostItem key={post.id} id={post.id} title={post.title} image={post.imageUrl} />)}
    </Container>
  );
}

type Params = {
  posts: Post[],
}

type Post = {
  id: string,
  title: string,
  imageUrl: string,
  content?: string,
}
