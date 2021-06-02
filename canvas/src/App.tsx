import React, { useRef, useState, useCallback, useEffect } from "react";
import { SketchField, Tools } from "react-sketch";
import * as S from "./style";

// interface CanvasProps {
//   width: number;
//   height: number;
// }

// interface Coordinate {
//   x: number;
//   y: number;
// }

// function App({ width, height }: CanvasProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
//     undefined
//   );
//   const [isPainting, setIsPainting] = useState(false);

//   const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
//     if (!canvasRef.current) {
//       return;
//     }

//     const canvas: HTMLCanvasElement = canvasRef.current;
//     return {
//       x: event.pageX - canvas.offsetLeft,
//       y: event.pageY - canvas.offsetTop,
//     };
//   };

//   const drawLine = (
//     originalMousePosition: Coordinate,
//     newMousePosition: Coordinate
//   ) => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas: HTMLCanvasElement = canvasRef.current;
//     const context = canvas.getContext("2d");

//     if (context) {
//       context.strokeStyle = "red";
//       context.lineJoin = "round";
//       context.lineWidth = 5;

//       context.beginPath();
//       context.moveTo(originalMousePosition.x, originalMousePosition.y);
//       context.lineTo(newMousePosition.x, newMousePosition.y);
//       context.closePath();

//       context.stroke();
//     }
//   };

//   const startPaint = useCallback((event: MouseEvent) => {
//     const coordinates = getCoordinates(event);
//     if (coordinates) {
//       setIsPainting(true);
//       setMousePosition(coordinates);
//     }
//   }, []);

//   const paint = useCallback(
//     (event: MouseEvent) => {
//       event.preventDefault();
//       event.stopPropagation();

//       if (isPainting) {
//         const newMousePosition = getCoordinates(event);
//         if (mousePosition && newMousePosition) {
//           drawLine(mousePosition, newMousePosition);
//           setMousePosition(newMousePosition);
//         }
//       }
//     },
//     [isPainting, mousePosition]
//   );

//   const exitPaint = useCallback(() => {
//     setIsPainting(false);
//   }, []);

//   useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas: HTMLCanvasElement = canvasRef.current;

//     canvas.addEventListener("mouseover", startPaint);
//     canvas.addEventListener("mousemove", paint);
//     // canvas.addEventListener("mouseup", exitPaint);
//     canvas.addEventListener("mouseleave", exitPaint);

//     return () => {
//       canvas.removeEventListener("mouseover", startPaint);
//       canvas.removeEventListener("mousemove", paint);
//       // canvas.removeEventListener("mouseup", exitPaint);
//       canvas.removeEventListener("mouseleave", exitPaint);
//     };
//   }, [startPaint, paint, exitPaint]);

//   const [windowWidth, setWindowWidth] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     setWindowHeight(window.innerHeight);
//     console.log(window.innerWidth, window.innerHeight);
//   }, [window.innerWidth, window.innerHeight]);

//   return (
//     <S.Wrap>
//       <canvas ref={canvasRef} width={windowWidth} height="600" />
//     </S.Wrap>
//     // <S.Wrap>
//     //   <S.Canvas ref={canvasRef} />
//     // </S.Wrap>
//   );

const App = () => {
  return (
    <div>
      <SketchField
        width="1024px"
        height="768px"
        tool={Tools.Pencil}
        lineColor="black"
        lineWidth={3}
      />
    </div>
  );
};

App.defaultProps = {
  width: 800,
  height: 600,
};

export default App;
