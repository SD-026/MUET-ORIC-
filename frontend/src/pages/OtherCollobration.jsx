import { motion } from "framer-motion";
import { 
  FaUniversity, 
  FaUsers, 
  FaBookOpen, 
  FaFileAlt, 
  FaFlask, 
  FaNetworkWired, 
  FaMicrophone,
  FaShieldAlt,
  FaBuilding
} from "react-icons/fa";

// Replace these with your actual image imports
import tieIslamabad from '../assets/institutions/1.jpg';
import zindigiPrize from '../assets/institutions/1.jpg';
import sezmc from '../assets/institutions/1.jpg';
import nich from '../assets/institutions/1.jpg';
import cssp from '../assets/institutions/1.jpg';
import rdf from '../assets/institutions/1.jpg';
import timesConsultant from '../assets/institutions/1.jpg';
import redMarker from '../assets/institutions/1.jpg';
import samanShifa from '../assets/institutions/1.jpg';
import smartMentor from '../assets/institutions/1.jpg';
import pjif from '../assets/institutions/1.jpg';

const institutions = [
  { name: "TIE Islamabad", logo: tieIslamabad, country: "Pakistan" },
  { name: "Zindigi Prize JS Bank", logo: zindigiPrize, country: "Pakistan" },
  { name: "Sindh Economic Zones Management Company", logo: sezmc, country: "Pakistan" },
  { name: "National Incubation Center Hyderabad", logo: nich, country: "Pakistan" },
  { name: "Civil Society Support Program", logo: cssp, country: "Pakistan" },
  { name: "Research and Development Foundation Fund", logo: rdf, country: "Pakistan" },
  { name: "Times Consultant TE", logo: timesConsultant, country: "Pakistan" },
  { name: "Red Marker System Private Limited", logo: redMarker, country: "Pakistan" },
  { name: "Saman E Shifa Foundation", logo: samanShifa, country: "Pakistan" },
  { name: "Smart Mentor FZ-LLC Dubai", logo: smartMentor, country: "UAE" },
  { name: "Pakistan Japan Intellect Forum", logo: pjif, country: "International" }
];

const collaborationAreas = [
  { icon: <FaFileAlt size={20} />, text: "Multidisciplinary joint research" },
  { icon: <FaBookOpen size={20} />, text: "Applying for joint research funding" },
  { icon: <FaUsers size={20} />, text: "Co-authoring publications" },
  { icon: <FaNetworkWired size={20} />, text: "Exchanging academic materials and information" },
  { icon: <FaShieldAlt size={20} />, text: "Co-patenting products from research" },
  { icon: <FaFlask size={20} />, text: "Access to state-of-the-art laboratories" },
  { icon: <FaMicrophone size={20} />, text: "Training exchanges, conferences, and workshops" }
];

const OtherCollaboration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8 mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-pink-500/10 rounded-full filter blur-3xl"></div>
          
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Other Collaborations
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto px-4"
          >
            Strategic partnerships beyond academic institutions
          </motion.p>
        </div>

      
        {/* Partner Institutions Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <FaBuilding className="mr-2 md:mr-3 text-blue-400" size={24} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Partner Organizations
              </span>
            </h2>
            <div className="text-sm text-blue-300">
              {institutions.length} Valuable Partners
            </div>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group bg-[#0A192F]/50 hover:bg-[#0A192F]/70 border border-purple-500/20 rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center h-full transition-all hover:shadow-md md:hover:shadow-lg hover:border-purple-400/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-16 md:h-20 w-full flex items-center justify-center mb-2 md:mb-3 relative z-10">
                  <img 
                    src={institution.logo} 
                    alt={institution.name} 
                    className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xs sm:text-sm text-center font-medium text-blue-100 group-hover:text-white relative z-10 line-clamp-2">
                  {institution.name}
                </h3>
                <div className="mt-1 text-[10px] sm:text-xs text-blue-300 relative z-10">
                  {institution.country}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

       
      </div>
    </motion.div>
  );
};

export default OtherCollaboration;