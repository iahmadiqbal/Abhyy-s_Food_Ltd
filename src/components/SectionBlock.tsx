import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBlockProps {
  image: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  id?: string;
  cta?: ReactNode;
}

const SectionBlock = ({ image, title, children, reverse = false, id, cta }: SectionBlockProps) => {
  return (
    <section id={id} className="py-16">
      <div className={`container mx-auto px-4 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-80 object-cover" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
          {cta && <div className="mt-6">{cta}</div>}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionBlock;
