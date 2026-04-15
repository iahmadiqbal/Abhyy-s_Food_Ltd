import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiUsers, FiHome, FiBriefcase, FiStar, FiShield } from "react-icons/fi";
import { MdRestaurantMenu, MdCake, MdLocalDining, MdFastfood, MdEco, MdCelebration } from "react-icons/md";
import HeroBanner from "@/components/HeroBanner";

const serviceCards = [
  { icon: <MdRestaurantMenu size={32} />, title: "Ready Meals", desc: "Authentic ready-to-eat meals crafted with traditional recipes." },
  { icon: <MdCake size={32} />, title: "Snacks & Sweets", desc: "Traditional sweets and savoury snacks for every occasion." },
  { icon: <MdLocalDining size={32} />, title: "Event Catering", desc: "Professional catering services for events of all sizes." },
  { icon: <MdFastfood size={32} />, title: "Custom Orders", desc: "Tailored bulk and custom orders for your specific needs." },
  { icon: <MdEco size={32} />, title: "Vegetarian", desc: "Diverse vegetarian specialties with authentic flavour." },
  { icon: <MdCelebration size={32} />, title: "Festive Specials", desc: "Special festive menus for celebrations and holidays." },
];

const audiences = [
  { icon: <FiHome size={28} />, label: "Families" },
  { icon: <FiUsers size={28} />, label: "Events & Community" },
  { icon: <FiBriefcase size={28} />, label: "Corporate" },
  { icon: <FiStar size={28} />, label: "Busy Professionals" },
  { icon: <FiShield size={28} />, label: "Government Organisations" },
];

const trustPoints = [
  "Authentic Taste", "Consistent Quality", "Hygienic Prep", "Reliable Service", "Professional Setup"
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <HeroBanner image="/images/hero-home.jpg" title="Authentic Taste. Modern Convenience." subtitle="Ready meals, catering & trusted food products for Calgary's diverse community.">
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => alert("Call us at: +1 (403) 000-0000")} className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
            ORDER NOW
          </button>
          <Link to="/get-a-quote" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
            GET A QUOTE
          </Link>
        </div>
      </HeroBanner>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
            <img src="/images/food-prep.jpg" alt="Food Preparation" className="rounded-xl shadow-lg w-full h-96 object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ABHYY'S FOOD delivers authentic, culturally inspired meals designed for modern lifestyles. From everyday meals to special occasions, we combine traditional flavour with consistent quality and convenient ordering. Our commitment to hygiene, quality ingredients, and professional service makes us Calgary's trusted food partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-foreground text-center mb-12">
            Our Services
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <motion.div key={card.title} variants={item}
                className="bg-background p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-primary font-semibold text-lg hover:underline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-foreground text-center mb-12">
            Who We Serve
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {audiences.map((a) => (
              <motion.div key={a.label} variants={item}
                className="flex flex-col items-center gap-3 p-6 bg-muted rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors group cursor-pointer">
                <div className="text-primary group-hover:text-primary-foreground transition-colors">{a.icon}</div>
                <span className="font-semibold text-sm text-center">{a.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose Us
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap justify-center gap-6">
            {trustPoints.map((point) => (
              <motion.div key={point} variants={item} className="flex items-center gap-2 bg-background px-6 py-3 rounded-full shadow-sm">
                <FiCheckCircle className="text-primary" size={20} />
                <span className="font-medium text-foreground">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Planning an Event?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Let us handle the food with reliable and professional catering services.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/get-a-quote" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
              GET A QUOTE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Food Safety Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <FiShield className="text-primary mx-auto mb-4" size={48} />
            <h2 className="text-3xl font-bold text-foreground mb-4">Food Safety & Compliance</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We follow strict hygiene, preparation, and food safety standards to ensure every product meets quality and safety expectations.
            </p>
            <Link to="/food-safety" className="text-primary font-semibold text-lg hover:underline">Learn More →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
