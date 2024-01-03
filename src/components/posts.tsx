import styled from "styled-components";
import { PostForm } from "./post-form";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Post = styled.div`
  width: 500px;
  height: 100%;
`;

export interface PostProps {
  id: string;
  userId: string;
  userName: string;
  photo: string;
  text: string;
  createdAt: number;
}

export const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPost = async () => {
    const postsQuery = await query(
      collection(db, "posts"),
      orderBy("createdAt", "desc"),
      limit(3)
    );
    const postData = await getDocs(postsQuery);
    const posts = postData.docs.map((doc) => {
      const { userName, photo, text, userId, createdAt } = doc.data();
      return {
        userName,
        photo,
        text,
        userId,
        createdAt,
        id: doc.id,
      };
    });
    setPosts(posts);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <Post>
        {posts.map((post) => (
          <PostForm key={post.id} {...post} />
        ))}
      </Post>
    </Container>
  );
};
