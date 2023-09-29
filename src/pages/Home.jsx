import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { Trusted } from "../components/Trusted";
import { Featured } from "../components/Featured";

export const Home = () => {
  const title = {
    name: "Bhavik E-Commerse",
  };

  return (
    <>
      <HeroSection mydata={title} />
      <Featured />
      <Services />
      <Trusted />
    </>
  );
};
