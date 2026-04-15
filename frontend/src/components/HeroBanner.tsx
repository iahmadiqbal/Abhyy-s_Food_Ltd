import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  overlay?: boolean;
}

const HeroBanner = ({ image, title, subtitle, children, overlay = true }: HeroBannerProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {overlay && <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/80" />}
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 max-w-3xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
