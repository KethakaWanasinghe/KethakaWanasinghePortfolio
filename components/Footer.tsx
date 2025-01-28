"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-card py-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 z-10 text-primary">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mb-6 z-10 text-lg">
              I&apos;m always open to new opportunities, collaborations, and conversations.
              Feel free to reach out, share ideas, or simply say hello!
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 z-10">
              <a
                href="https://github.com/KethakaWanasinghe"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/kethaka-wanasinghe-299b46197"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href="mailto:kethakawanasinghe@gmail.com"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary" />
              </a>
              <a
                href="tel:+94785171445"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <FileText className="h-6 w-6 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Right Side Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-right"
          >
            {/* Text and Button Alignment */}
            <p className="text-lg text-muted-foreground mb-10 mt-12">
              Looking to know more about my professional journey? Download my CV to get detailed insights.
            </p>

            {/* Direct download button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 2 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors z-12"
              href="/assets/Kethaka_Wanasinghe_CV.pdf" 
              download="Kethaka_Wanasinghe_CV.pdf"
            >
              Download CV
            </motion.a>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Kethaka Wanasinghe. All rights reserved.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Built with <span className="font-bold">React</span>, <span className="font-bold">TypeScript</span>, and <span className="font-bold">Tailwind CSS</span>. Inspireed by <span className="font-bold">Bolt.new AI</span>.
            </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
