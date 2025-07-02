import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Camera, 
  Mountain,
  Trees,
  Sunrise,
  Star,
  Heart,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X
} from "lucide-react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Hero parallax effect
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);

  const Navigation = () => (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navigation"
    >
      <div className="nav-container">
        <div className="nav-content">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="nav-logo"
          >
            Discover Eswatini
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="nav-menu">
            {['Experiences', 'Culture', 'Wildlife', 'Luxury', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="nav-link"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href={`https://wa.me/+2687654321?text=Hello! I'm interested in Eswatini travel packages`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nav-book-btn"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
            >
              {['Experiences', 'Culture', 'Wildlife', 'Luxury', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={`https://wa.me/+2687654321?text=Hello! I'm interested in Eswatini travel packages`}
                className="nav-book-btn"
              >
                Book Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  const Hero = () => (
    <section ref={heroRef} className="hero-section">
      <motion.div 
        style={{ y: heroY }}
        className="hero-background"
      >
        <div className="hero-overlay"></div>
      </motion.div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-title"
          >
            Experience the
            <span className="hero-gradient-text"> Heart </span>
            of Africa
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-subtitle"
          >
            Discover Eswatini's rich heritage, majestic wildlife, and luxury accommodations. 
            From the sacred Reed Dance ceremony to Big Five safaris.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hero-buttons"
          >
            <motion.a
              href="#experiences"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn-primary"
            >
              Explore Packages <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href={`https://wa.me/+2687654321?text=Hello! I'd like to learn more about Eswatini travel packages`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn-secondary"
            >
              <MessageCircle size={20} /> Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="hero-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Scroll to discover</span>
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );

  const ExperienceCard = ({ image, title, description, highlights, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay }}
        whileHover={{ y: -10 }}
        className="experience-card"
      >
        <div className="card-image">
          <motion.img
            src={image}
            alt={title}
          />
          <div className="card-image-overlay"></div>
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          
          <div className="card-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <CheckCircle size={16} className="highlight-icon" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card-button"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    );
  };

  const Experiences = () => (
    <section id="experiences" className="section section-experiences">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Unforgettable
            <span className="hero-gradient-text"> Experiences</span>
          </h2>
          <p className="section-subtitle">
            From ancient traditions to luxury safaris, discover the magic that makes Eswatini unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 grid-sm-2 grid-lg-3">
          <ExperienceCard
            image="https://images.pexels.com/photos/32835391/pexels-photo-32835391.jpeg"
            title="Reed Dance Ceremony"
            description="Witness the sacred Umhlanga ceremony where thousands of maidens celebrate Swazi heritage in September"
            highlights={[
              "Cultural immersion experience",
              "Royal village access",
              "Traditional performances"
            ]}
            delay={0.1}
          />
          
          <ExperienceCard
            image="https://images.unsplash.com/photo-1551357246-9a602bac321e"
            title="Big Five Safaris"
            description="Encounter elephants, lions, rhinos, leopards and buffalo in pristine national parks"
            highlights={[
              "Hlane Royal National Park",
              "Professional guides",
              "Premium game vehicles"
            ]}
            delay={0.2}
          />
          
          <ExperienceCard
            image="https://images.unsplash.com/photo-1548182397-261253f88d4a"
            title="Luxury Accommodations"
            description="Stay in world-class lodges and luxury tented camps surrounded by African wilderness"
            highlights={[
              "5-star amenities",
              "Panoramic views",
              "Fine dining experiences"
            ]}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );

  const CulturalHeritage = () => (
    <section id="culture" className="section section-culture">
      <div className="culture-background">
        <div className="culture-bg-overlay"></div>
        <img 
          src="https://images.pexels.com/photos/32739684/pexels-photo-32739684.jpeg"
          alt="Cultural dance"
          className="culture-bg-image"
        />
      </div>
      
      <div className="section-container">
        <div className="culture-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="culture-text"
          >
            <h2 className="culture-title">
              Rich Cultural
              <span className="hero-gradient-text"> Heritage</span>
            </h2>
            
            <p className="culture-description">
              Immerse yourself in the ancient traditions of the Swazi people. Experience authentic cultural ceremonies, 
              traditional crafts, and the warm hospitality that defines Eswatini.
            </p>

            <div className="culture-features">
              {[
                {
                  icon: <Calendar className="feature-icon" />,
                  title: "Reed Dance Festival",
                  description: "September 1, 2025 - Witness thousands of maidens in traditional ceremony"
                },
                {
                  icon: <Users className="feature-icon" />,
                  title: "Traditional Villages",
                  description: "Experience authentic Swazi lifestyle in Mantenga Cultural Village"
                },
                {
                  icon: <Camera className="feature-icon" />,
                  title: "Royal Ceremonies",
                  description: "Exclusive access to royal celebrations and cultural events"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="culture-feature"
                >
                  {item.icon}
                  <div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/+2687654321?text=I'm interested in cultural experiences in Eswatini`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="culture-cta"
            >
              <MessageCircle size={20} />
              Book Cultural Tour
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="culture-images"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1603703182693-51a19941fa59"
              alt="Traditional attire"
              className="culture-image"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.pexels.com/photos/3764310/pexels-photo-3764310.jpeg"
              alt="Cultural performance"
              className="culture-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Wildlife = () => (
    <section id="wildlife" className="section section-wildlife">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Incredible
            <span className="hero-gradient-text"> Wildlife</span>
          </h2>
          <p className="section-subtitle">
            Home to the Big Five and countless other species in pristine national parks and reserves
          </p>
        </motion.div>

        <div className="wildlife-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="wildlife-image-container"
          >
            <img
              src="https://images.unsplash.com/photo-1721172964531-62ad73c87e27"
              alt="Elephant herd"
              className="wildlife-image"
            />
            <div className="wildlife-image-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="wildlife-text"
          >
            <h3>Big Five Adventures</h3>
            <p className="wildlife-description">
              Experience the thrill of encountering Africa's most iconic animals in their natural habitat. 
              Our expert guides ensure safe, memorable encounters with elephants, lions, rhinos, leopards, and buffalo.
            </p>

            <div className="wildlife-parks">
              {[
                { name: "Hlane Royal Park", animals: "Lions & Elephants" },
                { name: "Mkhaya Reserve", animals: "Black Rhinos" },
                { name: "Mlilwane Sanctuary", animals: "Antelope & Birds" },
                { name: "Malolotja Reserve", animals: "Mountain Wildlife" }
              ].map((park, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="park-card"
                >
                  <h4 className="park-name">{park.name}</h4>
                  <p className="park-animals">{park.animals}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/+2687654321?text=I want to book a Big Five safari in Eswatini`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="wildlife-cta"
            >
              Book Safari <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Luxury = () => (
    <section id="luxury" className="section section-luxury">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Luxury
            <span className="hero-gradient-text"> Retreats</span>
          </h2>
          <p className="section-subtitle">
            World-class accommodations offering unparalleled comfort in the heart of Africa
          </p>
        </motion.div>

        <div className="luxury-grid">
          {[
            {
              image: "https://images.pexels.com/photos/18611231/pexels-photo-18611231.jpeg",
              title: "Safari Lodges",
              description: "Luxury lodges with panoramic views of the African wilderness",
              amenities: ["5-star service", "Gourmet dining", "Spa treatments", "Game viewing decks"]
            },
            {
              image: "https://images.unsplash.com/photo-1548182397-261253f88d4a",
              title: "Tented Camps",
              description: "Elegant tented accommodations for an authentic safari experience",
              amenities: ["Private bathrooms", "Air conditioning", "Butler service", "Private terraces"]
            }
          ].map((accommodation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="luxury-card"
            >
              <div className="luxury-card-image">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                />
                <div className="card-image-overlay"></div>
              </div>
              
              <div className="luxury-card-content">
                <h3 className="luxury-card-title">{accommodation.title}</h3>
                <p className="luxury-card-description">{accommodation.description}</p>
                
                <div className="luxury-amenities">
                  {accommodation.amenities.map((amenity, i) => (
                    <div key={i} className="amenity-item">
                      <Star className="amenity-icon" />
                      <span className="amenity-text">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card-button"
                >
                  Check Availability
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="section section-contact">
      <div className="contact-background">
        <img 
          src="https://images.unsplash.com/photo-1586031489655-c933704cffae"
          alt="African sunset"
          className="contact-bg-image"
        />
        <div className="contact-bg-overlay"></div>
      </div>
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Start Your
            <span className="hero-gradient-text"> Journey</span>
          </h2>
          <p className="section-subtitle">
            Ready to experience the magic of Eswatini? Contact us today to plan your unforgettable adventure.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-info">
              <motion.a
                href={`https://wa.me/+2687654321?text=Hello! I'm interested in planning a trip to Eswatini`}
                whileHover={{ scale: 1.02 }}
                className="contact-item"
              >
                <div className="contact-icon whatsapp">
                  <MessageCircle />
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <p>+268 7654 3210</p>
                  <p className="highlight">Click to chat instantly</p>
                </div>
              </motion.a>

              <div className="contact-item">
                <div className="contact-icon email">
                  <Mail />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@discovereswatini.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon location">
                  <MapPin />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Mbabane, Eswatini</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form"
          >
            <h3 className="form-title">Quick Inquiry</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <select className="form-select">
                  <option value="">Select Experience</option>
                  <option value="cultural">Cultural Tours</option>
                  <option value="safari">Safari Adventures</option>
                  <option value="luxury">Luxury Retreats</option>
                  <option value="adventure">Adventure Activities</option>
                  <option value="business">Business Travel</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell us about your dream trip..."
                  rows="4"
                  className="form-textarea"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="form-submit"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Discover Eswatini</h3>
            <p className="footer-description">
              Your gateway to experiencing the heart of Africa. Authentic culture, 
              incredible wildlife, and luxury accommodations await.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="social-link"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="social-link"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="social-link"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Experiences</h4>
            <ul className="footer-links">
              {['Reed Dance Ceremony', 'Big Five Safaris', 'Cultural Villages', 'Luxury Lodges', 'Adventure Tours'].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Destinations</h4>
            <ul className="footer-links">
              {['Hlane Royal Park', 'Mlilwane Sanctuary', 'Mkhaya Reserve', 'Malolotja Reserve', 'Mantenga Village'].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">+268 7654 3210</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span className="footer-contact-text">info@discovereswatini.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span className="footer-contact-text">Mbabane, Eswatini</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Discover Eswatini. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="app-container">
      <Navigation />
      <Hero />
      <Experiences />
      <CulturalHeritage />
      <Wildlife />
      <Luxury />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;