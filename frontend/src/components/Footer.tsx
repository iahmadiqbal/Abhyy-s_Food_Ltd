import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/ABHYY'S FOOD.png" alt="ABHYY'S FOOD LTD" className="h-[60px] w-[60px] object-contain bg-white p-2 rounded-lg" />
            </div>
            <p className="text-sm opacity-80">Authentic ethnic food with modern convenience. Serving Calgary's diverse community with quality and trust.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors"><FiFacebook size={20} /></a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors"><FiInstagram size={20} /></a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors"><FiTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Home</Link>
              <Link to="/about" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">About</Link>
              <Link to="/services" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Services</Link>
              <Link to="/who-we-serve" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Who We Serve</Link>
              <Link to="/food-safety" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Food Safety</Link>
              <Link to="/get-a-quote" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Get a Quote</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services#ready-meals" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Ready Meals</Link>
              <Link to="/services#snacks-sweets" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Snacks & Sweets</Link>
              <Link to="/services#event-catering" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Event Catering</Link>
              <Link to="/services#vegetarian" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Vegetarian Specialties</Link>
              <Link to="/services#custom-bulk" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Custom & Bulk Orders</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FiPhone className="text-primary" /> <span>+1 (403) 000-0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FiMail className="text-primary" /> <span>info@abhyysfood.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FiMapPin className="text-primary" /> <span>Calgary, Alberta, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">© {new Date().getFullYear()} ABHYY'S FOOD LTD. All rights reserved.</p>
          <div className="flex gap-4 text-sm opacity-60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
