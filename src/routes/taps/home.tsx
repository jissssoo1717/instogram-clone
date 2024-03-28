import { useEffect, useState } from "react";
import { Container, Tap } from "../../components/taps-components";
import { Posts } from "../../components/post-components/posts";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <Container>
      {!isLoading && (
        <Tap>
          <Posts />
        </Tap>
      )}
    </Container>
  );
};
