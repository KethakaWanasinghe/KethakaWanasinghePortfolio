"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 95 },
      { name: "Bootstrap", level: 80 },
      { name: "C/C#", level: 60 },
      { name: "Java", level: 60 },
      { name: "JavaScript", level: 70 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 70 },
      { name: "MongoDB", level: 90 },
      { name: "PHP", level: 60 },
      { name: "SQL", level: 70 },
      { name: "MySQL", level: 80 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 55 },
      { name: "Figma", level: 90 },
      { name: "Photoshop", level: 80 },
      { name: "GitHub/GitLab", level: 80 },
      { name: "Postman", level: 70 },
      { name: "Axios", level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-accent z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 z-10 "
        >
          <h2 className="text-3xl font-bold mb-4 z-10">Skills & Expertise</h2>
          <p className="text-muted-foreground z-10">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg z-10"
            >
              <h3 className="text-xl font-semibold mb-6 z-10">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden ">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
