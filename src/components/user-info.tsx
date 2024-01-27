import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Container = styled.div`
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

const ProfileOptionButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url("/profile-option.svg");
  background-color: transparent;
  border: none;
  right: 10%;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const UserForm = styled.div`
  position: relative;
  margin-left: 50px;
  height: 100%;
  padding-top: 50px;
  width: 100%;
`;

type Props = {
  optionOpenHandle: () => void;
};

export const UserInfo = ({ optionOpenHandle }: Props) => {
  const user = auth.currentUser;
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");

  // Initialize Profile Image
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
      }
    };
    initProfileImg();
  }, []);

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
      <label htmlFor="chooseUserIcon">
        {isProfileImage === false ? (
          <UserIcon src="/profile.svg" $isprofileimage={isProfileImage} />
        ) : (
          <UserIcon src={profileImageUrl} $isprofileimage={isProfileImage} />
        )}
      </label>

      <ProfileImageInput
        id="chooseUserIcon"
        type="file"
        accept="image/*"
        onChange={changeProfileImg}
      />

      <UserForm>
        <span>{user?.displayName}</span>
        <ProfileOptionButton onClick={optionOpenHandle}></ProfileOptionButton>
      </UserForm>
    </Container>
  );
};
