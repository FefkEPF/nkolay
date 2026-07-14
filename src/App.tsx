import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SeoSchema from "./components/SeoSchema";
import { COMPANY } from "./lib/constants";

const Home = React.lazy(() => import("./components/Home"));
const Services = React.lazy(() => import("./components/Services"));
const ServiceDetail = React.lazy(() => import("./components/ServiceDetail"));
const References = React.lazy(() => import("./components/References"));
const ContactForm = React.lazy(() => import("./components/ContactForm"));
const LegalPage = React.lazy(() => import("./components/LegalPage"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/hizmetler" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/hizmet/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/referanslar" element={<PageTransition><References /></PageTransition>} />
          <Route path="/iletisim" element={<PageTransition><ContactForm /></PageTransition>} />
          <Route path="/kvkk" element={<PageTransition><LegalPage page="kvkk" /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><LegalPage page="terms" /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><LegalPage page="privacy" /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-surface text-gray-900 selection:bg-primary selection:text-white font-sans overflow-x-hidden antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}
