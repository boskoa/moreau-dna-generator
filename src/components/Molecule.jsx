import styled from "styled-components";

const StyledMolecule = styled.div`
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
`;

function Molecule({ side, delay, base }) {
  return (
    <StyledMolecule
      id={side}
      className={base}
      style={{ animationDelay: delay }}
    />
  );
}

export default Molecule;
