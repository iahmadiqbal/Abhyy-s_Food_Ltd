import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import SectionBlock from "@/components/SectionBlock";

const ServicesPage = () => {
  return (
    <>
      <HeroBanner image="/images/hero-services.jpg" title="Our Services" subtitle="Delivering authentic food solutions for everyday needs, special occasions, and modern lifestyles." />

      <SectionBlock id="ready-meals" image="/images/ready-meals.jpg" title="Ready-to-Eat Meals"
        cta={<button onClick={() => alert("Call us at: +1 (403) 000-0000")} className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">ORDER NOW</button>}>
        <p>Our ready-to-eat meals bring the comfort of home-cooked ethnic food straight to your table. Each meal is prepared using authentic recipes, fresh ingredients, and traditional cooking techniques that preserve the true flavour of every dish. Whether you're looking for a quick weekday dinner or a satisfying weekend meal, our range of ready meals is designed to save you time without compromising on taste. Every meal is hygienically prepared, properly sealed, and delivered with care.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="snacks-sweets" image="/images/snacks.jpg" title="Snacks & Sweets" reverse
          cta={<button onClick={() => alert("Call us at: +1 (403) 000-0000")} className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">ORDER NOW</button>}>
          <p>From traditional sweets to crispy savoury snacks, our collection is crafted to celebrate every moment. Perfect for festivals, gatherings, or everyday cravings, each item is made with authentic ingredients and time-honoured recipes. We offer a wide variety of sweets and snacks that cater to diverse palates. Whether you need a box of mithai for a celebration or samosas for an office party, we deliver fresh, flavourful, and beautifully presented treats.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="vegetarian" image="/images/vegetarian.jpg" title="Vegetarian Specialties"
        cta={<button onClick={() => alert("Call us at: +1 (403) 000-0000")} className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">ORDER NOW</button>}>
        <p>Our vegetarian menu celebrates the richness and variety of plant-based ethnic cuisine. From hearty curries and dal dishes to fresh salads and paneer specialties, every meal is designed to deliver maximum flavour and nutrition. We understand the importance of vegetarian food in many cultures, and our dedicated vegetarian line ensures that every dish maintains the highest quality standards while honouring traditional recipes passed down through generations.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="event-catering" image="/images/catering.jpg" title="Event Catering" reverse
          cta={<Link to="/get-a-quote" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">GET A QUOTE</Link>}>
          <p>Planning a wedding, corporate event, community gathering, or family celebration? Our professional catering services are designed to make your event memorable with authentic, high-quality food served with style and reliability. From menu planning to setup and serving, we handle every detail so you can focus on your guests. Our experienced team ensures timely delivery, hygienic preparation, and a presentation that matches the significance of your occasion.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="custom-bulk" image="/images/bulk-orders.jpg" title="Custom & Bulk Orders"
        cta={<Link to="/get-a-quote" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">GET A QUOTE</Link>}>
        <p>Need food in large quantities? Our custom and bulk ordering service is perfect for businesses, organizations, and events that require consistent quality at scale. We work with you to create tailored menus that meet your specific requirements. Whether it's daily office lunches, weekly meal plans, or one-time bulk orders for a special event, we offer flexible solutions with reliable delivery schedules and competitive pricing.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="festive-specials" image="/images/festive.jpg" title="Festive Specials" reverse
          cta={<button onClick={() => alert("Call us at: +1 (403) 000-0000")} className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">ORDER NOW</button>}>
          <p>Celebrate special occasions and festivals with our exclusive festive menu. From Diwali to Eid, Christmas to cultural celebrations, we create special dishes that honour tradition and bring joy to your festivities. Our festive specials are crafted with premium ingredients and traditional recipes, designed to make your celebrations memorable. Pre-order for holidays and special events to ensure availability and timely delivery.</p>
        </SectionBlock>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Looking to place an order or plan your next event?</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link to="/get-a-quote" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">GET A QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
