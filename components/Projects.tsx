"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Lecspace",
    description: "An innovative web application built to transform lab and lecture hall management!",
    image: "/assets/lecspace.png",
    tags: ["Next.js, Tailwind CSS", "TypeScript", "Spring Boot", "MySQL", "RESTful","Figma"],
    liveUrl: "https://www.linkedin.com/posts/kethaka-wanasinghe-299b46197_webapp-innovation-teamwork-activity-7283595619393224705-wURP?utm_source=social_share_send&utm_medium=member_desktop_web",
    
  },
  {
    title: "Blog Space",
    description: "A full-stack blog app built using Next.js, MongoDB, and Tailwind CSS!",
    image: "/assets/blogspace.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://www.linkedin.com/posts/kethaka-wanasinghe-299b46197_fullstackdevelopment-nextjs-mongodb-activity-7285752248444362752-Zjo_?utm_source=share&utm_medium=member_desktop",
    githubUrl: "https://github.com/KethakaWanasinghe/Blog_Space.git"
  },
  {
    title: "Smart Guitar Tuner",
    description: "An intuitive web application designed for guitar and bass players of all skill levels!",
    image: "/assets/tuner.png",
    tags: ["React", "TypeScript", "Tailwind CSS",],
    
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;