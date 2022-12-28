import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background-color: #aef5b5;
  color: ${({ theme }) => theme.bg};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 5px;
  height: 100%;
`;

const StyledInput = styled.input`
  background-color: #aef5b5;
  color: ${({ theme }) => theme.bg};
  border: none;
  padding: 0 0 0 5px;
  height: 100%;
`;

function LengthInput({ setLength }) {
  const [num, setNum] = useState(0);
  return (
    <StyledDiv>
      <label style={{ marginRight: "5px" }} htmlFor="length">
        Number of bases (even, hopefully)
      </label>
      <div style={{ height: "18px", marginTop: "-3px" }}>
        <StyledInput
          id="length"
          type="number"
          size={4}
          min={2}
          max={100}
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <StyledButton onClick={() => setLength(num)}>Set</StyledButton>
      </div>
    </StyledDiv>
  );
}

export default LengthInput;
