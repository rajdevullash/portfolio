import { useState } from "react";
import Reveal from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dashboardImg from "@/assets/project-dashboard.jpg";
import designSystemImg from "@/assets/project-design-system.jpg";
import marketingImg from "@/assets/project-marketing.jpg";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");

  const projects = [
    {
      id: 1,
      title: "Interactive Dashboard",
      description: "Responsive analytics dashboard with real-time charts and custom widgets",
      image: dashboardImg,
      tags: ["Next.js", "Tailwind", "Recharts"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Design System",
      description: "Reusable component library and tokens to accelerate development",
      image: designSystemImg,
      tags: ["Storybook", "Tailwind", "React"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Marketing Landing",
      description: "High-converting marketing landing page with animations",
      image: marketingImg,
      tags: ["Next.js", "Framer Motion"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);



  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-navy-medium to-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Selected{" "}
            <motion.span
              className="bg-gradient-accent bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A showcase of my recent work and contributions
          </motion.p>

          <motion.div
            className="flex gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {(["all", "web", "app"] as const).map((filterOption) => (
              <motion.div
                key={filterOption}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === filterOption ? "default" : "outline"}
                  onClick={() => setFilter(filterOption)}
                  size="sm"
                  className="capitalize"
                >
                  {filterOption}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group rounded-xl overflow-hidden bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end justify-center gap-3 p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15 + tagIndex * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
