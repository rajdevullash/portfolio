import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Raj delivered a beautiful product—fast and accessible. Great communication.",
      author: "Sofia",
      role: "Product Manager",
      company: "TechCorp"
    },
    {
      id: 2,
      quote: "Exceptional work! The application exceeded our expectations in both design and performance.",
      author: "Michael Chen",
      role: "CTO",
      company: "StartupHub"
    },
    {
      id: 3,
      quote: "Professional, responsive, and delivers quality code. Highly recommend for any web project.",
      author: "Emma Wilson",
      role: "Founder",
      company: "DigitalVentures"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
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
            Client{" "}
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
              Testimonials
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What clients say about working with me
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative bg-gradient-card backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="text-xl md:text-2xl italic text-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.p>

                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    <motion.p
                      className="font-semibold text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {testimonials[currentIndex].author}
                    </motion.p>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prev}
                        className="rounded-full"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={next}
                        className="rounded-full"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="flex gap-2 justify-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  initial={{ width: 8 }}
                  animate={{ width: index === currentIndex ? 32 : 8 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
