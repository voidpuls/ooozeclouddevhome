import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar";
import AnimatedBackground from "../../components/Background";
import SampPage from "../SampPage";
import End from "../End";
import Footer from "../Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Samp() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar />
      <SampPage />
      {!isMobile && <AnimatedBackground />}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Samp;
