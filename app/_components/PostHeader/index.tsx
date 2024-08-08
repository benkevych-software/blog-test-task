import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import styles from './styles.module.scss';

export default function PostHeader({ imageUrl, title, subtitle }: Params) {
  return (
    <Box className={styles.container} style={{ backgroundImage: `url(${imageUrl})` }}>
      <Container className={styles.wrapper}>
        <Typography className={styles.title} variant="h1" gutterBottom>
          {title}
        </Typography>
        <Typography className={styles.date} variant="caption" gutterBottom>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}

type Params = {
	imageUrl: string,
	title: string,
  subtitle: string,
}
