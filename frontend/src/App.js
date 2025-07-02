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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
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

  const CulturalHeritage = () => (
    <section id="culture" className="py-20 bg-gradient-to-b from-black to-slate-900 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        <img 
          src="https://images.pexels.com/photos/32739684/pexels-photo-32739684.jpeg"
          alt="Cultural dance"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Rich Cultural
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Heritage</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Immerse yourself in the ancient traditions of the Swazi people. Experience authentic cultural ceremonies, 
              traditional crafts, and the warm hospitality that defines Eswatini.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Calendar className="w-6 h-6 text-orange-400" />,
                  title: "Reed Dance Festival",
                  description: "September 1, 2025 - Witness thousands of maidens in traditional ceremony"
                },
                {
                  icon: <Users className="w-6 h-6 text-orange-400" />,
                  title: "Traditional Villages",
                  description: "Experience authentic Swazi lifestyle in Mantenga Cultural Village"
                },
                {
                  icon: <Camera className="w-6 h-6 text-orange-400" />,
                  title: "Royal Ceremonies",
                  description: "Exclusive access to royal celebrations and cultural events"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/+2687654321?text=I'm interested in cultural experiences in Eswatini`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <MessageCircle size={20} />
              Book Cultural Tour
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1603703182693-51a19941fa59"
              alt="Traditional attire"
              className="w-full h-64 object-cover rounded-3xl shadow-2xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.pexels.com/photos/3764310/pexels-photo-3764310.jpeg"
              alt="Cultural performance"
              className="w-full h-64 object-cover rounded-3xl shadow-2xl mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Wildlife = () => (
    <section id="wildlife" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Incredible
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Wildlife</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Home to the Big Five and countless other species in pristine national parks and reserves
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1721172964531-62ad73c87e27"
              alt="Elephant herd"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Big Five Adventures</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience the thrill of encountering Africa's most iconic animals in their natural habitat. 
              Our expert guides ensure safe, memorable encounters with elephants, lions, rhinos, leopards, and buffalo.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { name: "Hlane Royal Park", animals: "Lions & Elephants" },
                { name: "Mkhaya Reserve", animals: "Black Rhinos" },
                { name: "Mlilwane Sanctuary", animals: "Antelope & Birds" },
                { name: "Malolotja Reserve", animals: "Mountain Wildlife" }
              ].map((park, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
                >
                  <h4 className="font-semibold text-white mb-1">{park.name}</h4>
                  <p className="text-white/70 text-sm">{park.animals}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/+2687654321?text=I want to book a Big Five safari in Eswatini`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Book Safari <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Luxury = () => (
    <section id="luxury" className="py-20 bg-gradient-to-b from-slate-800 to-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Luxury
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Retreats</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            World-class accommodations offering unparalleled comfort in the heart of Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{accommodation.title}</h3>
                <p className="text-white/80 mb-6">{accommodation.description}</p>
                
                <div className="space-y-3 mb-6">
                  {accommodation.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/90">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
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

  const CulturalHeritage = () => (
    <section id="culture" className="py-20 bg-gradient-to-b from-black to-slate-900 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        <img 
          src="https://images.pexels.com/photos/32739684/pexels-photo-32739684.jpeg"
          alt="Cultural dance"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Rich Cultural
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Heritage</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Immerse yourself in the ancient traditions of the Swazi people. Experience authentic cultural ceremonies, 
              traditional crafts, and the warm hospitality that defines Eswatini.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Calendar className="w-6 h-6 text-orange-400" />,
                  title: "Reed Dance Festival",
                  description: "September 1, 2025 - Witness thousands of maidens in traditional ceremony"
                },
                {
                  icon: <Users className="w-6 h-6 text-orange-400" />,
                  title: "Traditional Villages",
                  description: "Experience authentic Swazi lifestyle in Mantenga Cultural Village"
                },
                {
                  icon: <Camera className="w-6 h-6 text-orange-400" />,
                  title: "Royal Ceremonies",
                  description: "Exclusive access to royal celebrations and cultural events"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/+2687654321?text=I'm interested in cultural experiences in Eswatini`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <MessageCircle size={20} />
              Book Cultural Tour
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1603703182693-51a19941fa59"
              alt="Traditional attire"
              className="w-full h-64 object-cover rounded-3xl shadow-2xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.pexels.com/photos/3764310/pexels-photo-3764310.jpeg"
              alt="Cultural performance"
              className="w-full h-64 object-cover rounded-3xl shadow-2xl mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Wildlife = () => (
    <section id="wildlife" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Incredible
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Wildlife</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Home to the Big Five and countless other species in pristine national parks and reserves
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1721172964531-62ad73c87e27"
              alt="Elephant herd"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Big Five Adventures</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience the thrill of encountering Africa's most iconic animals in their natural habitat. 
              Our expert guides ensure safe, memorable encounters with elephants, lions, rhinos, leopards, and buffalo.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { name: "Hlane Royal Park", animals: "Lions & Elephants" },
                { name: "Mkhaya Reserve", animals: "Black Rhinos" },
                { name: "Mlilwane Sanctuary", animals: "Antelope & Birds" },
                { name: "Malolotja Reserve", animals: "Mountain Wildlife" }
              ].map((park, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
                >
                  <h4 className="font-semibold text-white mb-1">{park.name}</h4>
                  <p className="text-white/70 text-sm">{park.animals}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/+2687654321?text=I want to book a Big Five safari in Eswatini`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Book Safari <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Luxury = () => (
    <section id="luxury" className="py-20 bg-gradient-to-b from-slate-800 to-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Luxury
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Retreats</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            World-class accommodations offering unparalleled comfort in the heart of Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{accommodation.title}</h3>
                <p className="text-white/80 mb-6">{accommodation.description}</p>
                
                <div className="space-y-3 mb-6">
                  {accommodation.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/90">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
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