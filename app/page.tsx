"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import PassionProjects from "@/components/PassionProjects";  // Import PassionProjects component

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Crafting Clean Code...");

  const loadingTexts = [
    "Crafting Clean Code...",
    "Designing Your Experience...",
    "Turning Ideas into Reality...",
    "Let's Build Something Amazing Together..."
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[currentIndex]);
    }, 2000);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-xl font-medium text-primary">{loadingText}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <PassionProjects />
      <Footer />
    </main>
  );
}
