import React, { useEffect, useState } from "react";

import {
  Polyline,
  Renderer,
  Transform,
  Vec3,
  Vec2,
  Color,
} from "ogl-typescript";
// import { BrowserRouter } from "react-router-dom";

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

  const vertex = `
            attribute vec3 position;
            attribute vec3 next;
            attribute vec3 prev;
            attribute vec2 uv;
            attribute float side;

            uniform vec2 uResolution;
            uniform float uDPR;
            uniform float uThickness;

            vec4 getPosition() {
                vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
                vec2 nextScreen = next.xy * aspect;
                vec2 prevScreen = prev.xy * aspect;

                vec2 tangent = normalize(nextScreen - prevScreen);
                vec2 normal = vec2(-tangent.y, tangent.x);
                normal /= aspect;
                normal *= 1.0 - pow(abs(uv.y - 0.5) * 1.9, 2.0);

                float pixelWidth = 1.0 / (uResolution.y / uDPR);
                normal *= pixelWidth * uThickness;

                // When the points are on top of each other, shrink the line to avoid artifacts.
                float dist = length(nextScreen - prevScreen);
                normal *= smoothstep(0.0, 0.02, dist);

                vec4 current = vec4(position, 1);
                current.xy -= normal * side;
                return current;
            }

            void main() {
                gl_Position = getPosition();
            }
        `;

  useEffect(() => {
    const renderer = new Renderer({ dpr: 2 });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(0.9, 0.9, 0.9, 0);

    const scene = new Transform();

    const lines = [];

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);

      // We call resize on the polylines to update their resolution uniforms
      lines.forEach((line) => line.polyline.resize());
    }

    window.addEventListener("resize", resize, false);

    function random(a, b) {
      const alpha = Math.random();
      return a * (1.0 - alpha) + b * alpha;
    }

    [
      "#e09f7d",
      // "#ef5d60",
      // "#ec4067",
      // "#a01a7d",
      // "#311847",
      // "#e09f7d",
      // "#ef5d60",
      // "#ec4067",
      // "#a01a7d",
      // "#311847",
    ].forEach((color, i) => {
      // Store a few values for each lines' randomised spring movement
      const count = 10;
      const points = [];
      for (let i = 0; i < count; i++) points.push(new Vec3());

      const line = {
        points: points,
        spring: random(0.01, 0.05),
        friction: random(0.9, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(random(-1, 1) * 0.002),
        polyline: new Polyline(gl, {
          points,
          vertex,
          uniforms: {
            uColor: { value: new Color(color) },
            uThickness: { value: random(1, 5) },
          },
        }),
      };

      line.polyline.mesh.setParent(scene);

      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, false);
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    function updateMouse(e) {
      console.log(e);
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      // Get mouse value in -1 to 1 range, with y flipped
      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
      );
    }

    const tmp = new Vec3();

    requestAnimationFrame(update);
    function update(t) {
      requestAnimationFrame(update);

      lines.forEach((line) => {
        // Update polyline input points
        // console.log(line);
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            // For the first point, spring ease it to the mouse position
            tmp
              .copy(mouse)
              .add(line.mouseOffset)
              .sub(line.points[i])
              .multiply(line.spring);
            line.mouseVelocity.add(tmp).multiply(line.friction);
            line.points[i].add(line.mouseVelocity);
          } else {
            // The rest of the points ease to the point in front of them, making a line
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    }
  }, []);

  return (
    // <BrowserRouter>
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
    // </BrowserRouter>
  );
};

export default App;
