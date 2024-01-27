import { useEffect, useState } from "react";
import { Container } from "../../components/taps-components";
import styled from "styled-components";
import { db } from "../../firebase";
import { ImageContainer } from "../../components/profile-images";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { UserInfo } from "../../components/user-info";

const Tap = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 300px;
  right: 0;
`;

const ProfileForm = styled.div`
  width: 1000px;
`;

const UserPosts = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(3, 300px);
  grid-auto-rows: 300px;
  gap: 30px;
  margin: 30px 0;
`;

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  // Initialize Loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Initialize Posted Images
  useEffect(() => {
    setImages([]);

    const getPostImages = async () => {
      const imgRef = collection(db, "posts");
      const imageQuery = await query(imgRef, orderBy("createdAt", "desc"));
      const snapshots = await getDocs(imageQuery);

      snapshots.docs.map((doc) => {
        const { photo } = doc.data();
        setImages((prev) => [...prev, photo]);
      });
    };

    getPostImages();
  }, [isLoading]);

  return (
    <Container>
      {isLoading ? null : (
        <Tap>
          <ProfileForm>
            <UserInfo />

            <UserPosts>
              {images.map((image) => (
                <ImageContainer key={image} $image={image} />
              ))}
            </UserPosts>
          </ProfileForm>
        </Tap>
      )}
    </Container>
  );
};
