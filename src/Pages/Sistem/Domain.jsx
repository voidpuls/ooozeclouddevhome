import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar";
import AnimatedBackground from "../../components/Background";
import DomainPage from "../DomainPage";
import End from "../End";
import Footer from "../Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Domain() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar />
      <DomainPage />
      {!isMobile && <AnimatedBackground />}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Domain;
