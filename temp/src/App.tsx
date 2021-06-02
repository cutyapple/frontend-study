import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";

import * as S from "./style";

const App = () => {
  const text = "CutyApple";
  const [isHoverArray, setIsHoverrArray] = useState(
    Array.from({ length: text.length }, () => false)
  );

  const onMouseOver = (index) => {
    if (!isHoverArray[index]) {
      setTimeout(() => {
        setIsHoverrArray((prevArr) =>
          prevArr.map((isHover, idx) => (idx === index ? !isHover : isHover))
        );
      }, 1000);
      setIsHoverrArray((prevArr) =>
        prevArr.map((isHover, idx) => (idx === index ? !isHover : isHover))
      );
    }
  };

  const splitText = text.split("");

  return (
    <BrowserRouter>
      <S.Wrap>
        {splitText.map((text, index) => (
          <S.InteractiveText
            key={index}
            isHoverArray={isHoverArray[index]}
            onMouseOver={() => onMouseOver(index)}
          >
            {text}
          </S.InteractiveText>
        ))}
      </S.Wrap>
    </BrowserRouter>
  );
};

export default App;
