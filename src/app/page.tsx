"use client"
import { useEffect, useState } from "react";

import { Loading } from "@/components/Loading"

import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero";

import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { FaqSection } from "@/sections/Faq";

import { appWithTranslation } from 'next-i18next'
import '../../i18n';

const Home = () => {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (showLoading) {
    return <Loading />
  }

  return (
    <AnimatePresence mode="wait">
      {showLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }
          }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          <Header />
          <HeroSection />

          <ProjectsSection />
          <TapeSection />

          <TestimonialsSection />
          <AboutSection />

          <ContactSection />
          <FaqSection />

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default appWithTranslation(Home);