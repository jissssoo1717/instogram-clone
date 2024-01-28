import { Unsubscribe } from "firebase/auth";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";

interface CommentsProps {
  userName: string;
  comment: string;
  cid: string;
}

const Container = styled.div`
  width: 100%;
  padding: 2px 0;
`;

const CommentForm = styled.div`
  margin: 5px 0;
`;

const CommentedUser = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const Comment = styled.span`
  font-size: 13px;
  padding: 0 5px;
`;

export const CommentList = ({ docid }: { docid: string }) => {
  const [comments, setComments] = useState<CommentsProps[]>([]);

  useEffect(() => {
    let unsubscibe: Unsubscribe | null = null;

    const getComments = async () => {
      const commentsQuery = await query(
        collection(db, `posts/${docid}/comments`),
        orderBy("createdAt", "desc"),
        limit(5)
      );
      unsubscibe = await onSnapshot(commentsQuery, (snapshot) => {
        const comments = snapshot.docs.map((doc) => {
          const { userName, comment, cid } = doc.data();

          return {
            userName,
            comment,
            cid: doc.id,
          };
        });
        setComments(comments);
      });
    };

    getComments();

    return () => {
      unsubscibe && unsubscibe();
    };
  }, []);

  return (
    <Container>
      {comments.map((comment) => (
        <CommentForm key={comment.cid}>
          <CommentedUser>{comment.userName}</CommentedUser>
          <Comment>{comment.comment}</Comment>
        </CommentForm>
      ))}
    </Container>
  );
};
