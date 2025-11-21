import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating particles animation - more variety
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'cyan' : 'purple',
  }));

  // Floating orbs with different sizes and colors
  const floatingOrbs = [
    { size: 400, color: 'primary', x: -200, y: -200, duration: 20 },
    { size: 350, color: 'cyan', x: 1200, y: 800, duration: 25 },
    { size: 500, color: 'purple', x: 600, y: 400, duration: 30 },
    { size: 300, color: 'pink', x: 100, y: 700, duration: 22 },
    { size: 450, color: 'blue', x: 900, y: 100, duration: 28 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple animated gradient orbs with different movements */}
        {floatingOrbs.map((orb, index) => {
          const colorClasses = {
            primary: 'bg-primary/25',
            cyan: 'bg-cyan-bright/25',
            purple: 'bg-purple-500/20',
            pink: 'bg-pink-500/20',
            blue: 'bg-blue-500/20',
          };
          
          return (
            <motion.div
              key={index}
              className={`absolute ${colorClasses[orb.color as keyof typeof colorClasses]} rounded-full blur-3xl`}
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                left: `${orb.x}px`,
                top: `${orb.y}px`,
              }}
              animate={{
                x: [0, Math.sin(index) * 80, Math.cos(index) * 60, 0],
                y: [0, Math.cos(index) * 60, Math.sin(index) * 80, 0],
                scale: [1, 1.15 + index * 0.05, 1.2 + index * 0.05, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />
          );
        })}

        {/* Rotating gradient rings */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full border border-primary/10"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-cyan-bright/10"
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Enhanced floating particles with colors */}
        {particles.map((particle) => {
          const colorClasses = {
            primary: 'bg-primary/30',
            cyan: 'bg-cyan-bright/30',
            purple: 'bg-purple-500/25',
          };
          
          return (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full ${colorClasses[particle.color as keyof typeof colorClasses]}`}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                boxShadow: `0 0 ${particle.size * 2}px currentColor`,
              }}
              animate={{
                y: [0, -50 - Math.random() * 30, 0],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          );
        })}

        {/* Animated wave effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20"
          style={{
            background: `linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.3))`,
            clipPath: 'polygon(0 50%, 100% 30%, 100% 100%, 0% 100%)',
          }}
          animate={{
            clipPath: [
              'polygon(0 50%, 100% 30%, 100% 100%, 0% 100%)',
              'polygon(0 40%, 100% 50%, 100% 100%, 0% 100%)',
              'polygon(0 50%, 100% 30%, 100% 100%, 0% 100%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/3 opacity-15"
          style={{
            background: `linear-gradient(0deg, transparent, rgba(139, 92, 246, 0.3))`,
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 50%)',
          }}
          animate={{
            clipPath: [
              'polygon(0 0, 100% 0, 100% 60%, 0 50%)',
              'polygon(0 0, 100% 0, 100% 50%, 0 60%)',
              'polygon(0 0, 100% 0, 100% 60%, 0 50%)',
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Enhanced animated mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 60% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 90% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 50%",
              "50% 100%",
              "0% 0%",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing light effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced animated grid pattern with rotation */}
        <motion.div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
            rotate: [0, -360],
          }}
          transition={{
            x: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 30, repeat: Infinity, ease: "linear" },
            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          }}
        />
        
        {/* Diagonal lines effect */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)',
          }}
          animate={{
            x: [0, 200, 0],
            y: [0, 200, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge animation */}
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Available for new opportunities
          </motion.div>
          
          {/* Main heading with staggered animation */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-accent bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.7,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Raj
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              Full Stack Web & Mobile Developer
            </motion.span>
          </motion.h1>

          {/* Description with fade and slide animation */}
          <motion.p
            className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          >
            1.5+ years experience. I build fast, modern and scalable applications with clean UI, strong performance and reliable backends.
          </motion.p>

          {/* Tech badges with enhanced animation */}
          <motion.div 
            className="flex flex-wrap gap-3 justify-center mb-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {["Next.js", "React Native", "Node.js", "MongoDB"].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-secondary rounded-full"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1.3 + index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons with staggered animation */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                See my work
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Social icons with staggered animation */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            {[
              { href: "https://github.com/rajdevullash", icon: Github, delay: 1.7 },
              { href: "https://linkedin.com/in/raj-dev-ullash", icon: Linkedin, delay: 1.8 },
              { href: "mailto:dev.rajdevullash@gmail.com", icon: Mail, delay: 1.9 },
            ].map(({ href, icon: Icon, delay }, index) => (
              <motion.a
                key={index}
                href={href}
                target={index < 2 ? "_blank" : undefined}
                rel={index < 2 ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
