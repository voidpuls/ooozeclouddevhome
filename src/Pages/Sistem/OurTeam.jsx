import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar";
import AnimatedBackground from "../../components/Background";
import OurTeamPage from "../OurTeamPage";
import End from "../End";
import Footer from "../Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function OurTeam() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Navbar />
      <OurTeamPage />
      {!isMobile && <AnimatedBackground />}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default OurTeam;
