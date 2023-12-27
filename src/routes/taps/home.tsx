import { useEffect, useState } from "react";
import { Container, Tap } from "../../components/taps-components";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return <Container>{isLoading ? null : <Tap>Home</Tap>}</Container>;
};
