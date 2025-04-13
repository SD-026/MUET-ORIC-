import { motion } from "framer-motion";
import { FaUniversity, FaFlask, FaUserGraduate, FaSearch } from "react-icons/fa";
import { useState } from "react";

const FundProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const projects =  [
    {
      title: "Pesticides removal by point of use nanofiltration membrane and their rapid detection in water using liquid chromatography mass spectrometry",
      pi: "Dr. Muhammad Rizwan, Assistant Professor, USPCAS-W",
      type: "faculty"
    },
    {
      title: "Synthesis of printable and conductive nano carbon ink and its potential application in textile structured solar cells",
      pi: "Dr. Anam Ali Memon, Assistant Professor, Textile Engineering",
      type: "faculty"
    },
    {
      title: "Development of Antimicrobial PP Mesh devices for Hernia repair",
      pi: "Dr. Noor Ahmed Sanbhal, Associate Professor, Textile Engineering",
      type: "faculty"
    },
    {
      title: "Conserving Indus river water quality through pollution source tracking, economical treatment systems, and water circular economy",
      pi: "Dr. Rasool Bux Mahar, Professor, USPCAS-W",
      type: "faculty"
    },
    {
      title: "Molecular source tracking of Salmonella species at different stages of poultry slaughtering",
      pi: "Dr. Naveed Ahmed, Assistant Professor, USPCAS-W",
      type: "faculty"
    },
    {
      title: "Development and Upscaling of Combined Adsorption Distillation Technique for Saline-Water Treatment and Fresh Water Production on Industrial-Scale (CAD-WATER)",
      pi: "Dr. Tanveer Ahmed Gadhi, Assistant Professor, USPCAS-W",
      type: "faculty"
    },
    {
      title: "Pesticides removal by point of use nanofiltration membrane and their rapid detection in water using liquid chromatography mass spectrometry",
      pi: "Dr. Rizwan Ahmed, Assistant Professor, USPCAS-W",
      type: "faculty"
    },
    {
      title: "Eco-Innovation for Sustainable Industrial Growth of Major Industrial Sectors in Special Economic Zones (ECZs) under CPEC",
      pi: "Dr. Zubair Ahmed, Professor, USPCAS-W",
      type: "faculty"
    },
    {
      title: "Indus river Flow Monitoring Using Satellite Radar Altimetry Data and 2D Flood Model",
      pi: "Dr. Arjumand Zaidi, Senior Research Fellow, USPCAS-W",
      type: "faculty"
    },
    {
      title: "FABRICATION OF FLEXIBLE DYE-SENSITIZED SOLAR CELLS BASED ON TEXTILE COATED WITH CARBON NANOCOMPOSITES AS COUNTER ELECTRODE MATERIAL",
      pi: "Dr. Naveed Mengal, Associate Professor, Textile Engineering",
      type: "faculty"
    },
    {
      title: "Securing defi: Elevating safety measures for layer 2 hardware wallets and verification",
      pi: "Engr. Shamshad Naveed, Student, N/A",
      type: "student"
    },
    {
      title: "Lexe – Revolutionizing Salon Booking in Pakistan (Mobile App)",
      pi: "Engr. Uroosa Shaikh, Student, N/A",
      type: "student"
    },
    {
      title: "Vision SmartEd Revolutionizing education for visually impaired students with accessible quizzes (Mobile App)",
      pi: "Engr. Uroosa Shaikh, Student, N/A",
      type: "student"
    },
    {
      title: "Hand Made (Thar) Sindh (Web Application)",
      pi: "Engr. Abdul Rauf, Student, N/A",
      type: "student"
    },
    {
      title: "Design & Fabrication of Low Cost Stair lift",
      pi: "ABDUL WASIU, Student, Mechanical Engineering",
      type: "student"
    },
    {
      title: "Design & Development of Solar PV and Solar Thermal Operated Solar Dryers for Sustainable Food Supplies in Pakistan",
      pi: "Sadaf Gul, Student, Electrical Engineering",
      type: "student"
    },
    {
      title: "Smart Forest: enabling IoT for intrusion detection in forest",
      pi: "Muhammad Waqar, Student, Telecom Engineering",
      type: "student"
    },
    {
      title: "Building a Data Communication Network Between Drones and Ground IoT Sensor Systems",
      pi: "Bilawal, Student, Telecom Engineering",
      type: "student"
    },
    {
      title: "Design and Implementation of an Automatic Cleaning & Dual-Axis Tracking System for Enhancing Solar Power Performance",
      pi: "Santosh Kumar, Student, Electrical Engineering",
      type: "student"
    },
    {
      title: "Design and development of the Bionic Hand (An advanced prosthetic hand)",
      pi: "Muhammad Hurrera, Student, Mechatronics Engineering",
      type: "student"
    },
    {
      title: "Building an AI powered, user centric digital marketplace for event management",
      pi: "Muhammad Hunain, Student, Computer Science",
      type: "student"
    },
    {
      title: "Design and Analysis of Hydrogen Fuel cell using Nickel Electrode",
      pi: "Mureed Hussain, Student, Mechanical Engineering",
      type: "student"
    },
    {
      title: "Design and Development of an Autonomous Robot for Power Plant Pressure Vessel Inspection: Advancing Power Plant Safety",
      pi: "Asfia Fatima, Student, Mechatronics Engineering",
      type: "student"
    },
    {
      title: "Enhancing Accessibility With Bidirectional Sign Language and Translation",
      pi: "Vankesh Mathran, Student, Computer System Engineering",
      type: "student"
    },
    {
      title: "Real Time Air Quality Monitoring And Mapping System for Hyderabad Sindh",
      pi: "Noorjehan, Student, Electro",
      type: "student"
    },
    {
      title: "2D Virtual Cursor/Object Control Using EEG-Based Brain Computer Interface (BCI)",
      pi: "Amtul Waris Fiza, Student, Biomedical Engineering",
      type: "student"
    },
    {
      title: "Enhancing Campus Mobility Using Real Time Bus Tracking",
      pi: "Muhammad Talha, Student, Computer Systems Engineering",
      type: "student"
    },
    {
      title: "Multimodel analysis system for product reviews",
      pi: "muhammad zawar, Student, Computer System Engineering",
      type: "student"
    },
    {
      title: "IoT enabled Multipurpose Indigenous Cyber Lock for Fortifying industrial and cellular communication BTS sites",
      pi: "Muhammad Humzah, Student, Telecom Engineering",
      type: "student"
    },
    {
      title: "Design and Development of industrial articulated robotic arm for Educational Trainings",
      pi: "Maryam Aslam, Student, Mechatronics Engineering",
      type: "student"
    },
    {
      title: "Real Time FPGA Accelerated Image Processing using Vivado High Level Synthesis",
      pi: "Asfia Fatima, Student, Electronics Engineering",
      type: "student"
    },
    {
      title: "Voice and emotion based hate detection system using AI",
      pi: "Insha Kubra, Student, Electronics Engineering",
      type: "student"
    },
    {
      title: "Envirolink remote data transmission for challenging environments",
      pi: "Hina Akhlaque, Student, Telecom Engineering",
      type: "student"
    },
    {
      title: "AgriSense An IOT enabled precision Agriculture System",
      pi: "Samavia Fayyaz, Student, Telecommunication & Networking",
      type: "student"
    },
    {
      title: "Advancement in Braille Learning tools with the help of Edge AI",
      pi: "Yasha Azmat Khan, Student, Electronics Engineering",
      type: "student"
    },
    {
      title: "Synthesis of customized 3D printable heart valve",
      pi: "Mahnoor Shoro, Student, Biomedical Engineering",
      type: "student"
    },
    {
      title: "Hydro piezoelectric Canal: Harnessing maximum pressure gradients for sustainable energy generation",
      pi: "Afaque Ahmed, Student, Civil Engineering",
      type: "student"
    },
    {
      title: "Euro-Pak Sustainable Trade Bridge: Showcasing Pakistani Heritage in the European Market through E-commerce",
      pi: "Haiqa Nayab, Student, Computer Science",
      type: "student"
    },
    {
      title: "Detection of AI Generated Voices and Images",
      pi: "Faiz Nadeem, Student, Software",
      type: "student"
    },
    {
      title: "Dental caries Detection Application",
      pi: "Hira Khuwaja, Student, Software Engineering",
      type: "student"
    },
    {
      title: "AI-based device for the diagnosis of cardiovascular diseases",
      pi: "Mehwish rani, Student, Biomedical Engineering",
      type: "student"
    },
    {
      title: "Interactive Smart Mirror using Raspberry pi",
      pi: "Abdul Shaffay Qazi, Student, Software Engineering",
      type: "student"
    },
    {
      title: "3D printed foot-ankle exoskeleton in cutting edge physiotherapy for rehabilitation",
      pi: "iraj jumani, Student, Biomedical Engineering",
      type: "student"
    },
    {
      title: "Design and Development of FOUR DOF SCARA ROBOT",
      pi: "Aaisha khan, Student, Mechatronics Engineering",
      type: "student"
    },
    {
      title: "Interview preparation agent: Next generational AI assisted interview agent",
      pi: "Muzammil, Student, Computer System Engineering",
      type: "student"
    }
  ];


  // Filter projects based on search term
  const filteredProjects = projects.filter(project => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.pi.toLowerCase().includes(searchLower)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8 mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Funded Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg text-blue-200 max-w-4xl mx-auto"
          >
            The University has secured funding on the following Projects from the National and International Funding Agencies. These Projects are led by highly qualified faculty members and dedicated research staff. The list of funded projects is given below
          </motion.p>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-[#0A192F]/70 border border-cyan-500/20 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 p-2.5"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#112240]">
                <tr>
                  <th className="py-4 px-6 text-left w-2/3">
                    <div className="flex items-center">
                      <FaFlask className="text-cyan-400 mr-2" />
                      <span className="font-bold">Title of Research Proposal</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left w-1/3">
                    <div className="flex items-center">
                      <FaUserGraduate className="text-cyan-400 mr-2" />
                      <span className="font-bold">Principal Investigator</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-900/30">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.01 }}
                      whileHover={{ backgroundColor: 'rgba(8, 47, 73, 0.5)' }}
                      className={`hover:bg-[#082f49]/50 transition-colors ${project.type === 'faculty' ? 'bg-[#0A192F]/30' : 'bg-[#0A192F]/10'}`}
                    >
                      <td className="py-4 px-6 align-top">
                        <div className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${project.type === 'faculty' ? 'bg-cyan-400' : 'bg-blue-400'}`}></div>
                          <span className="text-sm sm:text-base">{project.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${project.type === 'faculty' ? 'bg-cyan-400' : 'bg-blue-400'}`}></div>
                          <span className="text-sm sm:text-base">{project.pi}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="py-8 text-center text-blue-300">
                      No projects found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-[#112240] px-6 py-4 text-sm text-blue-300 border-t border-blue-900/30 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-2 sm:mb-0">
              <FaUniversity className="mr-2" />
              <span>Showing {filteredProjects.length} funded projects</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-[#0A192F] rounded">Previous</button>
              <button className="px-3 py-1 text-xs bg-cyan-600 rounded">1</button>
              <button className="px-3 py-1 text-xs bg-[#0A192F] rounded">Next</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FundProjects;