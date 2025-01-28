"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground"; // Ensure the path is correct

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Web Developer",
    "Software Developer",
    "Graphics Designer",
    "UI/UX Designer",
    "Kethaka Wanasinghe",
    "Freelancer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen pt-16 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 z-10">
              Hi, I&apos;m <br />{" "}
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 2 }}
                className="text-orange-500 inline-block outline-black mt-4 z-10"
              >
                {roles[roleIndex]}
              </motion.span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 z-1">
              Full-Stack Web and Software Developer with a strong passion for
              coding, designing, and bringing innovative ideas to life. As an
              undergraduate at the Faculty of Technology, University of Sri
              Jayewardenepura, I blend my technical expertise with an artistic
              flair, crafting solutions that are both functional and visually
              appealing.
              <br />
              <br />
              Let’s create something extraordinary together!
            </p>

            <div className="flex space-x-4 z-1">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 2 }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium z-1"
                  href="/assets/Kethaka Wanasinghe_CV.pdf" 
                  download="Kethaka_Wanasinghe_CV.pdf"
                >
                  Download CV
                </motion.a>

                <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 2 }}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium z-10"
                href="#footer"
                >
                Contact Me
                </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="relative"
          >
            <div className="relative hover:scale-105 transition-transform duration-500">
              <Image
                src="/assets/kethaka.webp"
                alt="Profile"
                width={500}
                height={500}
                className="object-cover"
              />
              <motion.div
                className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-b from-transparent to-black/30 shadow-xl blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
