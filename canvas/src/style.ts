import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  z-index: -1;

  width: 100vw;
  height: 100vh;

  & > canvas {
    /* width: 100%;
    height: 100%; */
  }
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
