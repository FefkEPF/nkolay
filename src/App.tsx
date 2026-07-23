import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SeoSchema from "./components/SeoSchema";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { useReducedMotion } from "./lib/useReducedMotion";

const Home = React.lazy(() => import("./components/Home"));
const Services = React.lazy(() => import("./components/Services"));
const ServiceDetail = React.lazy(() => import("./components/ServiceDetail"));
const References = React.lazy(() => import("./components/References"));
const ContactForm = React.lazy(() => import("./components/ContactForm"));
const BlogList = React.lazy(() => import("./components/BlogList"));
const BlogPost = React.lazy(() => import("./components/BlogPost"));
const LegalPage = React.lazy(() => import("./components/LegalPage"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function PageTransition({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  return (
    <motion.div
      initial={reduced ? noMotion : { opacity: 0, y: 15 }}
      animate={reduced ? noMotion : { opacity: 1, y: 0 }}
      exit={reduced ? noMotion : { opacity: 0, y: -15 }}
      transition={reduced ? instant : { duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/hizmetler" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/hizmet/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
            <Route path="/referanslar" element={<PageTransition><References /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogList /></PageTransition>} />
            <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
            <Route path="/iletisim" element={<PageTransition><ContactForm /></PageTransition>} />
            <Route path="/kvkk" element={<PageTransition><LegalPage page="kvkk" /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><LegalPage page="terms" /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><LegalPage page="privacy" /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </ErrorBoundary>
    </Suspense>
  );
}

export default function App() {
  useEffect(() => {
    import("./components/ContactForm").then((m) => m.fetchCsrfToken?.()).catch(() => undefined);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-gray-900 selection:bg-primary selection:text-white font-sans overflow-x-hidden antialiased flex flex-col justify-between">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-full">
        Ana içeriğe geç
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
      <SeoSchema />
    </div>
  );
}
