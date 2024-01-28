import { useEffect, useState } from "react";
import { Container } from "../../components/taps-components";
import styled from "styled-components";
import { ImageContainer } from "../../components/profile-images";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { UserInfo } from "../../components/profile-user-info";
import { ProfileOption } from "../modals/profile-opt-modal";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

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
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [isOptClicked, setIsOptClicked] = useState(false);

  // Initialize Loading
  useEffect(() => {
    const initProfileImg = async () => {
      try {
        const profileRef = ref(storage, `profile/${user?.uid}`);
        const url = await getDownloadURL(profileRef);
        console.log(url);
        setProfileImageUrl(url);
        setIsProfileImage(true);
      } catch (error) {
        /* Return이 Promise면 파이어베이스 에러 발생
          ==> 해결 방법 찾기
        */
        setProfileImageUrl("");
        setIsProfileImage(false);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    initProfileImg();
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

  const profileOptionOpen = () => {
    setIsOptClicked(true);
  };

  const profileOptionClose = () => {
    setIsOptClicked(false);
  };

  return (
    <Container>
      {isOptClicked && <ProfileOption optionCloseHandle={profileOptionClose} />}
      {!isLoading && (
        <Tap>
          <ProfileForm>
            <UserInfo
              optionOpenHandle={profileOptionOpen}
              isProfileImage={isProfileImage}
              profileImageUrl={profileImageUrl}
              setIsProfileImage={setIsProfileImage}
              setProfileImageUrl={setProfileImageUrl}
            />

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
