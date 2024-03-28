import styled from "styled-components";
import { PostProps } from "./posts";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { CommentList } from "./post-comment-list";
import { LikeButton } from "./post-like-button";
import { PostOption } from "../../routes/modals/post-opt-modal";
import { deleteObject, ref } from "firebase/storage";

const Container = styled.div`
  width: 100%;
  // max-height: 750px;
  margin: 20px 0;
  padding-bottom: 100px;
`;
const Head = styled.div`
  width: 100%;
  height: 50px;
  padding: 2px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserIcon = styled.img`
  // 사용자 정보의 프로필 이미지를 가져올 예정
  /* width: 30px;
  height: 30px; */
  margin: 0 2px;
`;
const UserName = styled.span`
  // 사용자 정보의 닉네임(이름)
  margin-left: 5px;
  font-weight: bold;
`;
const OptButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url("/post-option.svg");
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const Body = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;
const PostImage = styled.img`
  // 사용자가 게시글 작성 후 해당 이미지 불러옴
  width: 500px;
  height: 500px;
  border-radius: 4px;
`;

const PostUIs = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const LikeSpan = styled.span`
  font-size: 13px;
  color: gray;
`;

const PostText = styled.div<{ $haslinebreaks: boolean; $istextover: boolean }>`
  // 사용자가 게시글 작성 후 해당 글 불러옴
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 20px;
  white-space: ${({ $haslinebreaks, $istextover }) =>
    $haslinebreaks || $istextover ? "nowrap;" : "pre-line;"};
`;

const ShowMoreButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px 0;
  font-size: 15px;
  color: #616161;
  &:hover {
    cursor: pointer;
  }
`;

// 댓글
const Comments = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #a4a4a4;
`;
const CommentTextarea = styled.textarea`
  width: 90%;
  display: inline;
  resize: none;
  text-decoration: none;
  border: none;
  background-color: transparent;
`;
const CommentButton = styled.button`
  color: #4bb2f2;
  font-weight: bold;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const PostForm = ({
  userName,
  photo,
  text,
  userId,
  id,
  likedUsers,
  likes,
}: PostProps) => {
  const user = auth.currentUser;
  const [hasLineBreaks, setHasLineBreaks] = useState(false);
  const [istextOver, setIstextOver] = useState(false);
  const [comment, setComment] = useState("");
  const [isOptClicked, setIsOptClicked] = useState(false);

  // 게시글이 33자 이상 넘어가는지 + 줄바꿈이 있는지 체크
  useEffect(() => {
    const hasLineBreaksValue = /\n|\r/.test(text);
    const istextOverValue = text.length >= 33;

    setHasLineBreaks(hasLineBreaksValue);
    setIstextOver(istextOverValue);
  }, []);

  const onShowTextMore = () => {
    setHasLineBreaks(false);
    setIstextOver(false);
  };

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSendComment = async (e: React.FormEvent<HTMLFormElement>) => {
    const user = auth.currentUser;

    e.preventDefault();
    if (!user || comment === "" || comment.length > 140) return;
    try {
      const commentsRef = doc(collection(db, "posts", id, "comments"));
      await setDoc(commentsRef, {
        userName: user.displayName,
        comment,
        createdAt: Date.now(),
      });

      setComment("");
    } catch (error) {
      console.error(error);
    }
  };

  const postOptionOpen = () => {
    setIsOptClicked(true);
  };

  const postOptionClose = () => {
    setIsOptClicked(false);
  };

  const deletePost = async () => {
    if (user?.uid !== userId) return;

    try {
      const photoRef = ref(storage, `posts/${userId}/${id}`);
      await deleteDoc(doc(db, "posts", id));
      await deleteObject(photoRef);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      {isOptClicked && (
        <PostOption
          optionCloseHandle={postOptionClose}
          deleteHandle={deletePost}
        />
      )}
      <Head>
        <UserInfo>
          <UserIcon src="/profile.svg" />
          <UserName>{userName}</UserName>
        </UserInfo>
        <OptButton onClick={postOptionOpen}></OptButton>
      </Head>

      <Body>
        <PostImage src={photo} />
        <PostUIs>
          <LikeButton docId={id} likedUsers={likedUsers} />
          <LikeSpan>좋아요 {likes}개</LikeSpan>
        </PostUIs>

        <PostText $haslinebreaks={hasLineBreaks} $istextover={istextOver}>
          {hasLineBreaks ? text.split("\n")[0] + "..." : text}
        </PostText>
        {hasLineBreaks || istextOver ? (
          <ShowMoreButton onClick={onShowTextMore}>더 보기</ShowMoreButton>
        ) : null}

        <CommentList docid={id} />

        <Comments onSubmit={onSendComment}>
          <CommentTextarea
            placeholder="댓글 달기..."
            value={comment}
            rows={1}
            maxLength={140}
            onChange={onChangeComment}
            required
          />
          <CommentButton type="submit">
            {comment.length > 0 ? "게시" : null}
          </CommentButton>
        </Comments>
      </Body>
    </Container>
  );
};
