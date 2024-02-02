import styled from "styled-components";
import { PostForm } from "./post-form";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";

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
  likedUsers: Array<string>;
  likes: number;
}

export const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    let unsub: Unsubscribe | null = null;

    const getPost = async () => {
      const postsQuery = await query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(3)
      );
      /* 
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
      */

      /* onSnapshot을 통해 실시간으로 데이터 가져옴 */
      unsub = await onSnapshot(postsQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { userName, photo, text, userId, createdAt, likedUsers } =
            doc.data();

          return {
            userName,
            photo,
            text,
            userId,
            createdAt,
            id: doc.id,
            likedUsers,
            likes: likedUsers.length,
          };
        });
        setPosts(posts);
      });
    };
    getPost();

    /* 리스너 분리 */
    return () => {
      unsub && unsub();
    };
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
