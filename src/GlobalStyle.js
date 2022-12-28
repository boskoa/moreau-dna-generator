import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Share Tech Mono', monospace;
  }

  body {
    min-height: 100vh;
  }

  h2 {
    text-shadow: 0px 0px 5px #19f72f;
    margin-bottom: 10px;
  }
  
  .pair {
    position: relative;
    display: flex;
    flex-direction: "row";
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    margin: 15px;
  }
  
  .molecule {
    height: 28px;
    min-width: 28px;
    border-radius: 50%;
  }
  
  @keyframes flip{
    to {
      transform: rotateY(360deg);
    }
  }
  
  #left {
    position: absolute;
    left: 0px;
    z-index: 1;
    animation: spin-left 3s linear infinite;
  }
  
  #right {
    position: absolute;
    right: 0px;
    z-index: 4;
    animation: spin-right 3s linear infinite;
  }
  
  @keyframes spin-left{
    0% {
      transform: translate(0px);
      z-index: 2;
      opacity: 0.9;
    }
    25% {
      transform: translate(36.5px) scale(0.7);
      z-index: 1;
      opacity: 0.5;
    }
    50% {
      transform: translate(73px);
      z-index: 4;
      opacity: 0.9;
    }
    75% {
      transform: translate(36.5px) scale(1.3);
      z-index: 5;
      opacity: 1;
    }
    100% {
      transform: translate(0px);
      z-index: 4;
      opacity: 0.9;
    }
  }
  
  @keyframes spin-right{
    0% {
      transform: translate(0px);
      z-index: 4;
      opacity: 0.9;
    }
    25% {
      transform: translate(-36.5px) scale(1.3);
      z-index: 5;
      opacity: 1;
    }
    50% {
      transform: translate(-73px);
      z-index: 4;
      opacity: 0.9;
    }
    75% {
      transform: translate(-36.5px) scale(0.7);
      z-index: 1;
      opacity: 0.5;
    }
    100% {
      transform: translate(0px);
      z-index: 2;
      opacity: 0.9;
    }
  }

  .A {
    background: radial-gradient(farthest-corner at 40% 40%, #f28f96, #ed0514);
    box-shadow: 0px 0px 10px 1px #ed0514;
  }

  .T {
    background: radial-gradient(farthest-corner at 40% 40%, #93b4ed, #0a5ff2);
    box-shadow: 0px 0px 10px 1px #0a5ff2;
  }

  .C {
    background: radial-gradient(farthest-corner at 40% 40%, #aef5b5, #19f72f);
    box-shadow: 0px 0px 10px 1px #19f72f;
  }

  .G {
    background: radial-gradient(farthest-corner at 40% 40%, #f5c58c, #f78a05);
    box-shadow: 0px 0px 10px 1px #f78a05;
  }
`;

export default GlobalStyle;
