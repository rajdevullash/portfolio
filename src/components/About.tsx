import profileImg from "@/assets/profile.jpg";
import { Code2, Smartphone, Database, Layers } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, accessible web applications with React, Next.js, and modern CSS frameworks"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating native-like mobile experiences with React Native for iOS and Android platforms"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing scalable APIs and database architectures with Node.js, Express, and MongoDB"
    },
    {
      icon: Layers,
      title: "Full Stack Solutions",
      description: "Delivering end-to-end solutions from concept to deployment with clean, maintainable code"
    }
  ];

  

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-navy-medium">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 shadow-glow"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              >
                <motion.img
                  src={profileImg}
                  alt="Raj - Full Stack Developer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About{" "}
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
                Me
              </motion.span>
            </motion.h2>

            {[
              "Hi, I am Raj. I work as a Full Stack Web and Mobile App Developer with 1.5+ years of experience in the relevant field. My main skills include Next.js, React Native, Node.js and MongoDB.",
              "I build fast, modern and scalable applications with clean UI, strong performance and a reliable backend structure.",
              "I can create complete solutions such as web applications, mobile applications, admin dashboards and custom APIs. All of my work follows a clean, organized and professional workflow.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {[
                { label: "Core skills:", value: "Next.js, React Native, Node.js, MongoDB" },
                { label: "Services:", value: "Web apps, Mobile apps, Admin dashboards, Custom APIs" },
                { label: "Approach:", value: "Clean code, performance, accessibility, and maintainable architecture" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="font-semibold text-foreground">{item.label}</span>
                  <span>{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all group relative overflow-hidden"
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
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative z-10"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-lg font-semibold mb-2 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {highlight.title}
              </motion.h3>

              <motion.p
                className="text-sm text-muted-foreground relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4 }}
              >
                {highlight.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
