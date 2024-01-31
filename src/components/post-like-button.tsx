import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";

const Button = styled.button<{ $isclicked: boolean }>`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  background-image: ${({ $isclicked }) =>
    $isclicked ? `url("/like-filled.svg")` : `url("/like.svg")`};
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

interface Props {
  docId: string;
  likedUsers: Array<string>;
}

export const LikeButton = ({ docId, likedUsers }: Props) => {
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  //Initialize
  useEffect(() => {
    if (!user) return;
    if (likedUsers.includes(user.uid)) setIsClicked(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Like Button Click ==> 분리하자
  useEffect(() => {
    if (!user || isLoading) return;

    const getLikeInfo = async () => {
      if (!likedUsers.includes(user.uid)) {
        likedUsers.push(user.uid);
      } else {
        likedUsers = likedUsers.filter((element) => element !== user.uid);
      }

      const postRef = doc(db, "posts", docId);
      const likeNum = likedUsers.length;

      await updateDoc(postRef, {
        likedUsers: likedUsers,
        likes: likeNum,
      });
    };

    getLikeInfo();
  }, [isClicked]);

  return (
    <Button
      onClick={() => setIsClicked((prev) => !prev)}
      $isclicked={isClicked}
    ></Button>
  );
};
