import Molecule from "./Molecule";
import Bond from "./Bond";
import { DELAY } from "../App";

function Pair({ s, i }) {
  return (
    <div className="pair">
      <Molecule side="left" delay={`${(i + Math.sqrt(i)) * DELAY}ms`} base={s[0]} />
      <Bond pair={s} id={i} />
      <Molecule side="right" delay={`${(i + Math.sqrt(i)) * DELAY}ms`} base={s[1]} />
    </div>
  );
}

export default Pair;
