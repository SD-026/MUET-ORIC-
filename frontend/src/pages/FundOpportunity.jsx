import { motion } from "framer-motion";
import { FaChevronRight, FaUniversity, FaFlask, FaGlobe, FaBookOpen, FaMoneyBillWave } from "react-icons/fa";

const FundOpportunity = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8 mt-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Research Funding Opportunities
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg text-blue-200"
          >
            Comprehensive list of available research grants and funding programs
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Interdisciplinary Research Grants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A192F]/70 border border-cyan-500/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500/10 p-2 rounded-lg mr-3">
                <FaFlask className="text-cyan-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Opportunities of Interdisciplinary Research</h2>
            </div>
            
            <div className="flex items-center mb-4 ml-2">
              <FaChevronRight className="text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold">Interdisciplinary Research Grants</h3>
            </div>
            
            <ul className="space-y-2 pl-12">
              {["Engro Power", "Engro Coal Mines", "Dawlance", "Engro Polymer", "Ippex of IEEE", 
                "FFBL Power Company Limited", "Liberty Mils Limited"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.03 }}
                  className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* HEC Grants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0A192F]/70 border border-cyan-500/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500/10 p-2 rounded-lg mr-3">
                <FaUniversity className="text-cyan-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">HEC Grants</h2>
            </div>

            {/* Competitive Research Grants */}
            <div className="flex items-center mb-3 ml-2">
              <FaChevronRight className="text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold">Competitive Research Grants</h3>
            </div>
            <ul className="space-y-2 pl-12 mb-6">
              {[
                "Grand Challenge Fund (GCF)",
                "Local Challenge Fund (LCF)",
                "Technology Transfer Support Fund (TTSF)",
                "Innovative & Collaborative Research Grant (ICRG)",
                "National Research Programme for Universities (NRPU)",
                "CPEC- Collaborative Research Grant",
                "RAPID Research & Innovation Initiative (RRII)",
                "Problem Based Applied Interdisciplinary Research Programme (PBAIRP)",
                "Technology Development Fund (TDF)"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.03 }}
                  className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Research for Innovation Grants */}
            <div className="flex items-center mb-3 ml-2">
              <FaChevronRight className="text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold">Research for Innovation Grants</h3>
            </div>
            <ul className="space-y-2 pl-12 mb-6">
              {[
                "Innovator Seed Fund (ISF)",
                "Patent Support Program"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Mobility Grants */}
            <div className="flex items-center mb-3 ml-2">
              <FaChevronRight className="text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold">Mobility Grants</h3>
            </div>
            <ul className="space-y-2 pl-12 mb-6">
              {[
                "Pak-US Joint Research Program (with USA)",
                "Pakistan Program For Collaborative Research (PPCR)",
                "PAK-TURK Researchers' Mobility Grant Programme",
                "Pak-FRANCE Peridot Research Program",
                "JICA Japan Mobility Program",
                "Erasmus +",
                "Erasmus + ICM",
                "Erasmus + Marquee"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.03 }}
                  className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Pakistan Science Foundation */}
            <div className="flex items-center mb-3 ml-2">
              <FaChevronRight className="text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold">Pakistan Science Foundation (PSF)</h3>
            </div>
            <ul className="space-y-2 pl-12 mb-6">
              {[
                "Research Support Grants",
                "Travel Grants for Presentation of Research Papers",
                "Library Support Grant",
                "Grants for Organizing Seminars/Conferences",
                "Textbook & Monograph Writing"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.03 }}
                  className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Non-HEC Grants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#0A192F]/70 border border-cyan-500/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500/10 p-2 rounded-lg mr-3">
                <FaGlobe className="text-cyan-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Non-HEC Grants</h2>
            </div>
            
            <ul className="space-y-2 pl-12">
              {[
                "Non-HEC Funding Opportunities",
                "Ignite FYP Fund",
                "Ignite Seed Fund",
                "Small Research Grant By Spencer Foundation",
                "International Development Research Centre Grant",
                "Sindh HEC",
                "Sindh HEC Research Funding"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.03 }}
                  className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FundOpportunity;