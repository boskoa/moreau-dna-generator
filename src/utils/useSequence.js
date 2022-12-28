import { useState, useEffect } from "react";

const useSequence = (length) => {
  const [sequence, setSequence] = useState([]);

  const generate = () => {
    const bases = ["A", "T", "C", "G"];
    const seq = [];

    for (let i = 0; i < length / 2; i++) {
      const base = bases[Math.floor(Math.random() * 4)];
      let pair = null;
      switch (base) {
        case "A":
          pair = "T";
          break;
        case "T":
          pair = "A";
          break;
        case "C":
          pair = "G";
          break;
        case "G":
          pair = "C";
          break;
        default:
          return null;
      }
      seq.push(base + pair);
    }

    return seq;
  };

  useEffect(() => {
    setSequence([]);
    setTimeout(() => setSequence(generate()), 100);
  }, [length]);

  return sequence;
};

export default useSequence;
