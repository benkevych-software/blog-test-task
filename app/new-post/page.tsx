'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TextField, Button, Container, Box } from '@mui/material';
import PostHeader from '@/app/_components/PostHeader';

import styles from './styles.module.scss';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      title,
      content,
      imageUrl,
    }

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(body),
      });

      router.push('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string)
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <PostHeader
        title="Create a New Article"
        imageUrl="/images/landing.png"
        subtitle="Share your thoughts with the world"
      />
      <Container className={styles.container} maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Content"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 2 }}
          >
            Upload File
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {imageUrl && (
            <Box className={styles.preview}>
              <Image alt="" src={imageUrl} width={50} height={50} />
            </Box>
          )}
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Container>
    </>
  );
}
