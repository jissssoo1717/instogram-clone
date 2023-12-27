import { useEffect, useState } from "react";
import { Container, Tap } from "../../components/taps-components";

export const Reels = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return <Container>{isLoading ? null : <Tap>Reels</Tap>}</Container>;
};
