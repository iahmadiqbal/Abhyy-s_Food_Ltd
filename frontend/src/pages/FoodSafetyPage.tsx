import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import SectionBlock from "@/components/SectionBlock";

const FoodSafetyPage = () => {
  return (
    <>
      <HeroBanner image="/images/hero-safety.jpg" title="Food Safety & Compliance" subtitle="Ensuring every product meets the highest quality and safety expectations.">
        <Link to="/get-a-quote" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">GET A QUOTE</Link>
      </HeroBanner>

      <SectionBlock id="intro" image="/images/hero-safety.jpg" title="Our Commitment to Food Safety">
        <p>At ABHYY'S FOOD, food safety isn't just a requirement — it's a core value that guides every step of our operation. From ingredient sourcing to final delivery, we maintain rigorous standards to ensure the safety and quality of every product we serve. Our team is trained in food handling best practices and follows established protocols that meet or exceed local health and safety regulations. We believe that trust is built through consistent, transparent practices.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="hygiene" image="/images/food-prep.jpg" title="Hygiene Practices" reverse>
          <p>Our kitchen and food preparation areas are maintained to the highest hygiene standards. Staff follow strict handwashing protocols, wear appropriate protective equipment, and undergo regular health screenings. We implement daily cleaning schedules, regular deep-cleaning cycles, and environmental monitoring to ensure our facilities remain clean, safe, and compliant with all health regulations.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="preparation" image="/images/food-prep.jpg" title="Food Preparation Standards">
        <p>Every meal is prepared following standardized recipes and procedures that ensure consistency in taste, quality, and safety. We carefully control cooking temperatures, preparation times, and ingredient measurements. Our kitchen operates with a focus on preventing cross-contamination, managing allergens responsibly, and ensuring that all food is cooked, stored, and served at safe temperatures throughout the process.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="packaging" image="/images/bulk-orders.jpg" title="Packaging & Handling" reverse>
          <p>Our packaging process is designed to preserve freshness, prevent contamination, and maintain food quality from our kitchen to your table. We use food-grade materials and sealed containers for all products. Temperature-sensitive items are handled with appropriate cold-chain management, and all packages are labelled with relevant information including ingredients, preparation dates, and handling instructions.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="quality" image="/images/ready-meals.jpg" title="Quality Control">
        <p>Quality control is embedded in every stage of our operation. We conduct regular taste tests, visual inspections, and consistency checks to ensure that every product meets our standards before it reaches customers. We maintain detailed records of our quality control processes, supplier certifications, and customer feedback to continuously improve our products and services. Our goal is zero compromises on quality.</p>
      </SectionBlock>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Interested in our quality standards?</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link to="/get-a-quote" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">GET A QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodSafetyPage;
