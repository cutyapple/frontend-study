import styled, { css, keyframes } from "styled-components";

const DropDownFadeIn = keyframes`
    0% {
        transform: scale3d(1,1,1);
    }
    30% {
        transform: scale3d(1.25,0.75,1);
    }
    40% {
        transform: scale3d(0.75,1.25,1);

    }
    50% {
        transform: scale3d(1.15,0.85,1);
    }
    65% {
        transform: scale3d(0.95,1.05,1);
    }
    75% {
        transform: scale3d(1.05,0.95,1);
    }
    100% {
        transform: scale3d(1,1,1);
    }
`;

export const Wrap = styled.div`
  background: #181818;
`;

export const InteractiveText = styled.span`
  display: inline-block;
  color: #ffffff;
  font-size: 8rem;
  /* background: pink; */
  transition: color 0.3s ease-in-out;

  ${(props) =>
    props.isHoverArray &&
    css`
      animation: ${DropDownFadeIn} 1s ease-in-out;
    `}

  &:hover {
    color: #08fdd8;
  }

  /* ${(props) => props.a && css``} */
`;
