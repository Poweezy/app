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
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            Discover Eswatini
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Experiences', 'Culture', 'Wildlife', 'Luxury', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-white/90 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href={`https://wa.me/+2687654321?text=Hello! I'm interested in Eswatini travel packages`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
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
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              {['Experiences', 'Culture', 'Wildlife', 'Luxury', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={`https://wa.me/+2687654321?text=Hello! I'm interested in Eswatini travel packages`}
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold"
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
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y: heroY }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1636871694216-d04517e0d1c2')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </motion.div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Experience the
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Heart </span>
            of Africa
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Discover Eswatini's rich heritage, majestic wildlife, and luxury accommodations. 
            From the sacred Reed Dance ceremony to Big Five safaris.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#experiences"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              Explore Packages <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href={`https://wa.me/+2687654321?text=Hello! I'd like to learn more about Eswatini travel packages`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={20} /> Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
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
        className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 group"
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/80 mb-4 leading-relaxed">{description}</p>
          
          <div className="space-y-2 mb-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    );
  };

  const Experiences = () => (
    <section id="experiences" className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unforgettable
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Experiences</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From ancient traditions to luxury safaris, discover the magic that makes Eswatini unique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <Experiences />
      
      {/* Add more sections here */}
      <div className="h-96 bg-slate-900 flex items-center justify-center">
        <p className="text-white/60 text-lg">More sections coming soon...</p>
      </div>
    </div>
  );
}

export default App;