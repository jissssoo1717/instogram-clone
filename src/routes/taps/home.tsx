import { useEffect, useState } from "react";
import { Container, Tap } from "../../components/taps-components";
import { auth } from "../../firebase";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const logOut = () => {
    auth.signOut();
  };

  return (
    <Container>
      {isLoading ? null : (
        <Tap>
          <button onClick={logOut}></button>
        </Tap>
      )}
    </Container>
  );
};
