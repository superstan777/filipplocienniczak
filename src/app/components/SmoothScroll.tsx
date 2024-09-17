"use client";
import { ReactLenis } from "lenis/react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const SmoothScroll: React.FC<Props> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.001,
        duration: 2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
