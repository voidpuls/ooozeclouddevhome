import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar";
import AnimatedBackground from "../../components/Background";
import Games from "../GamesPage";
import End from "../End";
import Footer from "../Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Minecraft() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar />
      <Games />
      {!isMobile && <AnimatedBackground />}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Minecraft;
