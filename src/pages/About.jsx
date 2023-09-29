import React from "react";
import { HeroSection } from "../components/HeroSection";

export const About = () => {
  const title = {
    name: "Bhavik Store",
  };

  return (
    <>
      <HeroSection mydata={title} />
    </>
  );
};
