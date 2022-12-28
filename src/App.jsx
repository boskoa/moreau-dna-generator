import styled, { ThemeProvider } from "styled-components";
import { dark, light } from "./themes";
import GlobalStyle from "./GlobalStyle";
import LengthInput from "./components/LengthInput";
import Pair from "./components/Pair";
import { useState } from "react";
import useSequence from "./utils/useSequence";

export const DELAY = 100;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: 10px;
`;

const Sequence = styled.div`
  align-self: center;
  perspective: 300rem;
  margin: 20px;
`;

export default function App() {
  const [length, setLength] = useState();
  const sequence = useSequence(length);

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Container>
        <h2>Dr. Moreau's DNA generator</h2>
        <LengthInput setLength={setLength} />
        <Sequence
          style={{
            transform: `rotate3d(1, 0, 3, ${(120 * length) / length ** 2}deg)`,
          }}
        >
          {sequence.map((s, i) => {
            return <Pair key={i} s={s} i={i} />;
          })}
        </Sequence>
      </Container>
    </ThemeProvider>
  );
}
