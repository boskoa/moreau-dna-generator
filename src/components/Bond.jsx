import styled from "styled-components";
import { DELAY } from "../App";

const StyledBond = styled.div`
  opacity: 0.7;
  height: 5px;
  width: 36px;
  border-radius: 3px;
  z-index: 3;
  animation: flip 3s linear infinite;
`;

const colors = {
  A: "#f28f96",
  T: "#93b4ed",
  C: "#aef5b5",
  G: "#f5c58c",
};

function Bond({ pair, id }) {
  return (
    <StyledBond
      style={{
        backgroundImage: `linear-gradient(to right, ${colors[pair[0]]}, ${colors[pair[1]]
          }`,
        animationDelay: `${(id + Math.sqrt(id)) * DELAY}ms`,
      }}
    />
  );
}

export default Bond;
