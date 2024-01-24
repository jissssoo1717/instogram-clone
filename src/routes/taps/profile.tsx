import { useEffect, useState } from "react";
import { Container } from "../../components/taps-components";
import styled from "styled-components";
import { auth, db, storage } from "../../firebase";
import { ImageContainer } from "../../components/profile-images";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

const UserInfo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const UserIcon = styled.img<{ $isprofileimage: boolean }>`
  width: 170px;
  height: 170px;
  margin: 0 50px;
  border: ${({ $isprofileimage }) =>
    $isprofileimage ? "1px solid #bdbdbd;" : "none;"};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const UserForm = styled.div`
  margin-left: 50px;
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

// 프로필 이미지

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const user = auth.currentUser;

  // Initialize Loading and Profile Image
  useEffect(() => {
    const initProfileImg = async () => {
      try {
        const url = await getDownloadURL(ref(storage, `profile/${user?.uid}`));
        setProfileImageUrl(url);
        setIsProfileImage(true);
      } catch (error) {
        /* Return이 Promise면 파이어베이스 에러 발생
          ==> 해결 방법 찾기
        */
        setProfileImageUrl("");
        setIsProfileImage(false);
      }
    };

    initProfileImg();

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

  // Set User's Profile Image
  useEffect(() => {
    const uploadProfileImg = async () => {
      try {
        if (profileImage === null) return;

        const imageRef = ref(storage, `profile/${user?.uid}`);
        const result = await uploadBytes(imageRef, profileImage);

        const url = await getDownloadURL(result.ref);
        setProfileImageUrl(url);
      } catch (error) {
        console.error(error);
      }
    };

    uploadProfileImg();
  }, [profileImage]);

  const changeProfileImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setIsProfileImage(false);

    if (files && files.length === 1) {
      setProfileImage(files[0]);
      setIsProfileImage(true);
    }
  };

  return (
    <Container>
      {isLoading ? null : (
        <Tap>
          <ProfileForm>
            <UserInfo>
              <label htmlFor="chooseUserIcon">
                {isProfileImage === false ? (
                  <UserIcon
                    src="/profile.svg"
                    $isprofileimage={isProfileImage}
                  />
                ) : (
                  <UserIcon
                    src={profileImageUrl}
                    $isprofileimage={isProfileImage}
                  />
                )}
              </label>

              <ProfileImageInput
                id="chooseUserIcon"
                type="file"
                accept="image/*"
                onChange={changeProfileImg}
              />
              <UserForm>{user?.displayName}</UserForm>
            </UserInfo>

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
