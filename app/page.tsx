'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import PostsList from './_components/PostsList';
import Header from './_components/Header';
import Search from './_components/Search';

import styles from './styles.module.scss'

export default function LandingPage() {
  const [posts, setPosts] = useState([]);
  const loadPosts = async (searchTerm?: string) => {
    const query = searchTerm ? `?searchTerm=${searchTerm}` : '';
    const response = await fetch(`/api/posts${query}`);
    const postsList = await response.json();
    setPosts(postsList);
  }
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <Header />
      <Image
        className={styles.image}
        src="/images/landing.png"
        alt=""
        layout="responsive"
        width={0}
        height={0}
      />
      <Container className={styles.container}>
        <Search onSearch={loadPosts} />
        <PostsList posts={posts} />
      </Container>
    </>
  );
}

