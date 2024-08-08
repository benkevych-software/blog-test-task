'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './styles.module.scss';

export default function Search({ onSearch }: Params) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();
  const navigateToNewPostPage = () => router.push('/new-post');
  return (
    <Container className={styles.container}>
      <Typography className={styles.header} variant="h1" gutterBottom>
        Social Media Feed
      </Typography>
      <Box className={styles.searchContainer}>
        <TextField
          className={styles.searchInput}
          label="Search"
          variant="outlined"
          size="small"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
        />
        <Button
          className={styles.searchButton}
          variant="outlined"
          onClick={() => onSearch(searchTerm)}
        >
          Search
        </Button>
        <Button
          className={styles.searchButton}
          variant="outlined"
          onClick={navigateToNewPostPage}
        >
          + New
        </Button>
      </Box>
    </Container>
  );
}

type Params = {
  onSearch: (searchTerm: string) => void;
};
