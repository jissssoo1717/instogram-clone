import { useEffect, useState } from "react";
import { Container, Tap } from "../../components/taps-components";

export const Explore = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return <Container>{isLoading ? null : <Tap>explore</Tap>}</Container>;
};
