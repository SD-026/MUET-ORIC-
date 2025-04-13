import React from 'react';
import { FiFileText, FiLayers, FiBriefcase, FiDollarSign, FiUsers, FiSearch, FiBookmark, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import InnovationImage from '../assets/images/innovation.jpg'; // Make sure to add your image

const WhatIsIpo = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
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
            IPO TTO TISC
          </motion.span>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connecting Research, Protecting Innovation, Driving Impact
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Technology Transfer Office Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5">
              <div className="flex items-center">
                <FiLayers className="text-white text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-white">Technology Transfer Office (TTO)</h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                Our mission is to promote the transfer of Muet University ready to commercialize technologies for society’s use and benefit while generating unrestricted income to further support research and education. Technology Transfer Office receives invention disclosures from faculty, staff and students. TTO at ORIC Muet evaluate these disclosures for their commercial possibilities, and when possible license them to industry. If the inventions are successfully licensed, cash royalties collected by ORIC Muet provide funding to the inventors’ departments and schools, as well as personal shares for the inventors themselves. Technology is typically transferred through an agreement in which Meut grants to a third party a license to use Muet’s intellectual property rights in the defined technology with exclusive/non-exclusive rights.                </p>
                
                <div className="grid md:grid-cols gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <FiBriefcase className="text-blue-600 mr-2" />
                      Resources
                    </h3>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3 flex-shrink-0">
                          <FiFileText className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="font-medium text-gray-800">Invention Disclosure Form</h4>
                          
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3 flex-shrink-0">
                          <FiSearch className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="font-medium text-gray-800">Available Technologies</h4>
                          <p className="text-sm text-gray-600">only patentable-will provides details later</p>
                        </div>
                      </li>
                    </ul>
                    
                    {/* Centered Image Below Resources */}
                    <motion.div 
                      className="mt-6 overflow-hidden rounded-lg  px-40"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={InnovationImage} 
                        alt="Technology Transfer at MUET" 
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </div>
                  
                 
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Intellectual Property Office</h3>
                  <p className="text-gray-700">
                  The intellectual property office at ORIC MUET is established to manage inventions created by faculty, staff and students. The office provides complete management from evaluation to protecting the inventions.                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Intellectual Property Office Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5">
              <div className="flex items-center">
                <FiBookmark className="text-white text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property Office (IPO)</h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  The intellectual property office at ORIC MUET is established to manage inventions created by faculty, staff and students. The office provides complete management from evaluation to protecting the inventions.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Evaluation Process</h3>
                <p className="text-gray-700 mb-4">
                When you submit an Invention Disclosure Form to the IPO section of ORIC Muet, it is assigned to a IP Manager within one week of submission. Each disclosure is then evaluated for commercial potential and patentability by Technology Transfer Office. Factors we consider in evaluating the commercial potential of an invention include:                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Problems solved or unmet needs addressed",
                    "Potential applications and market size",
                    "Competitive landscape analysis",
                    "Patentability challenges",
                    "Commercialization potential"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3 flex-shrink-0">
                        <FiSearch className="h-5 w-5" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Patent Assessment</h3>
                  <p className="text-gray-700">
                    With input from ORIC's steering committee and inventors, patentability assessments are performed by our Technology Transfer Manager in consultation with patent attorneys and literature search specialists.
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">IP Protection Services</h3>
                <p className="text-gray-700 mb-4">
                  Our IP section provides comprehensive filing services for:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { 
                      icon: <FiFileText className="h-6 w-6" />, 
                      title: "Patents", 
                      desc: "Protect inventions and processes",
                      color: "bg-blue-100 text-blue-800" 
                    },
                    { 
                      icon: <FiFileText className="h-6 w-6" />, 
                      title: "Copyrights", 
                      desc: "Protect original works",
                      color: "bg-teal-100 text-teal-800" 
                    },
                    { 
                      icon: <FiFileText className="h-6 w-6" />, 
                      title: "Trademarks", 
                      desc: "Protect brands and logos",
                      color: "bg-indigo-100 text-indigo-800" 
                    },
                    { 
                      icon: <FiFileText className="h-6 w-6" />, 
                      title: "Industrial Design", 
                      desc: "Protect aesthetic designs",
                      color: "bg-purple-100 text-purple-800" 
                    }
                  ].map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`${service.color} rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3`}>
                        {service.icon}
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1 text-center">{service.title}</h4>
                      <p className="text-sm text-gray-600 text-center">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WhatIsIpo;