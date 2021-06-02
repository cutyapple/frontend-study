import React, { useEffect, useRef } from "react";

import * as S from "./style";

const Draw = () => {
  let canvas;
  const canvasRef = useRef();

  let pos = {
    drawable: false,
    X: -1,
    Y: -1,
  };
  let ctx;

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    // ctx.beginPath();
    // pos = { ...pos, drawable: true };
    canvas.addEventListener("mouseover", initDraw);
    canvas.addEventListener("mousemove", draw);
    // canvas.addEventListener("mouseout", finishDraw);
    // canvas.addEventListener("mouseup", finishDraw);
  });

  const initDraw = (e) => {
    console.log(1);
    ctx.beginPath();
    pos = { drawable: true, ...getPosition(e) };
  };

  const draw = (e) => {
    if (pos.drawable) {
      // console.log(getPosition(e));
      pos = { ...pos, ...getPosition(e) };
      ctx.lineTo(pos.X, pos.Y);
      ctx.stroke();
    }
  };

  const getPosition = (e) => {
    return { X: e.offsetX, Y: e.offsetY };
  };

  return (
    <S.Wrap>
      <S.Canvas ref={canvasRef} />
    </S.Wrap>
  );
};

export default Draw;
