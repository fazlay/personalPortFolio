import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotte/react-logo-lot.json";
const ReactLogo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={100} width={100} />
    </>
  );
};

export default ReactLogo;
