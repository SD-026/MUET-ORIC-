import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import DirectorImage from '../assets/images/sirtanveer.jpg';
import AboutUsImage from '../assets/images/oric.png';

const AboutUsPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const partners = [
    "National Incubation Center Hyderabad",
    "Pakistan Civil Aviation Authority",
    "Research & Development Foundation",
    "Sindh Economic Zone Management Company",
    "Fast Cables",
    "Universiti Tun Hussein Onn Malaysia"
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Abstract Banner with Reduced Height */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-abstract-pattern opacity-50"></div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Banner Content */}
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ORIC</span> MUET
          </motion.h1>

          <motion.span 
                className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
              >
                ABOUT US
              </motion.span>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering research and innovation for Pakistan's future
          </motion.p>
        </motion.div>
      </section>

      {/* Director's Message Section */}
      <section ref={ref} className="py-20 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Director Image with Creative Frame */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-gray-100">
                <img
                  src={DirectorImage}
                  alt="Director ORIC"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10"
                animate={{
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Director's Message Content */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <motion.span 
                className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
              >
                Director's Message
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Vision</span> into Reality
              </motion.h2>
              
              <motion.div className="space-y-4 text-gray-600 mb-8">
                <p>
                Welcome to the Office of Research, Innovation, and Commercialization (ORIC) at Mehran University of Engineering and Technology, Jamshoro.

At ORIC, we are driven by the belief that innovation and research are the cornerstones of societal advancement and economic growth. Our mission is to foster an environment where creativity thrives, research flourishes, and ideas are transformed into impactful solutions. In today’s rapidly evolving world, it is imperative that academic institutions like ours not only generate knowledge but also translate that knowledge into tangible benefits for industry, society, and the nation at large.

Our office is committed to supporting the entire research lifecycle, from the initial spark of an idea to its full realization as a product, service, or policy. We work closely with our faculty, students, and industry partners to identify potential innovations, protect intellectual property, and bring these innovations to market. Our goal is to bridge the gap between academia and industry, ensuring that the research conducted at MUET has a real-world impact.

As we move forward, ORIC will continue to play a pivotal role in aligning our research activities with national priorities, fostering collaborations, and nurturing the entrepreneurial spirit among our students and faculty. We are dedicated to creating a robust ecosystem that supports innovation, promotes entrepreneurship, and contributes to the socio-economic development of our country.

I invite you to explore the various initiatives and opportunities that ORIC offers and to join us in our mission to drive innovation and excellence at Mehran University of Engineering and Technology.

Together, let us make a lasting impact.

Prof. Dr. Tanweer Hussain
Director, Office of Research, Innovation, and Commercialization (ORIC)
Mehran University of Engineering and Technology, Jamshoro</p></motion.div>

              <motion.div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  DT
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Dr. Tanveer Ahmed</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-medium">Director, ORIC MUET</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About ORIC Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row-reverse gap-12 items-center"
          >
            {/* Team Image */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
                <img
                  src={AboutUsImage}
                  alt="ORIC Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl -z-10"
                animate={{
                  rotate: [0, -8, 8, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>

            {/* About Content */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <motion.span 
                className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
              >
                About ORIC
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Mission</span> & Vision
              </motion.h2>
              
              <motion.div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">1</span>
                    Mission Statement
                  </h3>
                  <p className="text-gray-600">
                  To foster a vibrant research ecosystem that drives innovative solutions to technological challenges, and promoting the commercialization of discoveries, by strengthening partnerships with industry and academia, while contributing to sustainable development.                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">2</span>
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                  To promote innovation and a vibrant research culture among faculty members and students, fostering a dynamic environment that encourages collaboration, creativity, and cutting-edge advancements in the institution.

</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MOU Partners Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
            >
              OUR MOU PARTNERS
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Partnerships</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Collaborating with leading organizations to drive innovation and research excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 transition-all duration-300 group-hover:bg-blue-500/20">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800">{partner}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;