import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import styles from './styles.module.scss';

export default function BlogItem({ id, image, title }: Params) {
  const router = useRouter();
  const navigateToPostPage = () => router.push(`posts/${id}`);
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt={title}
        height="240"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={styles.button}
          size="small"
          variant="outlined"
          onClick={navigateToPostPage}
        >
					Read
				</Button>
      </CardActions>
    </Card>
  );
}

type Params = {
	id: string,
	image: string,
	title: string,
}
