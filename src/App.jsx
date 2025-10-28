import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive"; 
import "./index.css";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WelcomeScreen from "./Pages/WelcomeScreen";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./Pages/404";

// Lazy-loaded components for the main landing page
const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const AdvancedManagement = lazy(() => import("./Pages/AdvancedManagement"));
const GlobalNetwork = lazy(() => import("./Pages/GlobalNetwork"));
const Testimoni = lazy(() => import("./Pages/Testimoni"));
const Faq = lazy(() => import("./Pages/Faq"));
const End = lazy(() => import("./Pages/End"));
const Footer = lazy(() => import("./Pages/Footer"));
const OurTeamPage = lazy(() => import("./Pages/OurTeamPage"));
const DocumentationPage = lazy(() => import("./Pages/DocumentationPage"));
const DiscordPage = lazy(() => import("./Pages/DiscordPage"));
const SampPage = lazy(() => import("./Pages/SampPage"));

// Lazy-loaded components for the system pages
const Minecraft = lazy(() => import("./Pages/Sistem/Minecraft"));
const PrivateNode = lazy(() => import("./Pages/Sistem/PrivateNode"));
const Games = lazy(() => import("./Pages/Sistem/Games"));
const Support = lazy(() => import("./Pages/Sistem/Support"));
const Domain = lazy(() => import("./Pages/Sistem/Domain"));
const OurTeam = lazy(() => import("./Pages/Sistem/OurTeam"));
const Documentation = lazy(() => import("./Pages/Sistem/Documentation"));
const Discord = lazy(() => import("./Pages/Sistem/Discord"));
const Samp = lazy(() => import("./Pages/Sistem/Samp"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); 

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          {!isMobile && <AnimatedBackground />}
          <Suspense fallback={<LoadingScreen />}>
            <Home />
            <Services />
            <AdvancedManagement />
            <GlobalNetwork />
            <Testimoni />
            <Faq />
            <End />
            <ScrollToTopButton />
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
};

function AppWithLoading() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") return;
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Suspense fallback={<LoadingScreen />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />
          <Route path="/Support" element={<Support />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/PrivateNode" element={<PrivateNode />} />
          <Route path="/Domain" element={<Domain />} />
          <Route path="/Minecraft" element={<Minecraft />} />
          <Route path="/Discord" element={<Discord />} />
          <Route path="/Samp" element={<Samp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWithLoading />
    </BrowserRouter>
  );
}

export default App;