import { motion } from "framer-motion";
import { FaSeedling, FaCar, FaMoneyBillWave, FaBolt, FaHeartbeat, FaRobot, FaLaptop, FaChalkboardTeacher, FaNetworkWired, FaChartLine, FaHandshake, FaPhone, FaClock, FaGlobe } from "react-icons/fa";

const WhatWeDo = () => {
  const techAreas = [
    { icon: <FaSeedling className="text-green-400 text-2xl" />, name: "Agri Tech" },
    { icon: <FaCar className="text-blue-400 text-2xl" />, name: "Auto Tech" },
    { icon: <FaMoneyBillWave className="text-emerald-400 text-2xl" />, name: "FinTech" },
    { icon: <FaBolt className="text-yellow-400 text-2xl" />, name: "Energy Tech" },
    { icon: <FaHeartbeat className="text-red-400 text-2xl" />, name: "Health Tech" },
    { icon: <FaRobot className="text-purple-400 text-2xl" />, name: "Smart Tech" }
  ];

  const programBenefits = [
    { icon: <FaLaptop className="text-cyan-400" />, text: "Access to technical subject matter advisory" },
    { icon: <FaLaptop className="text-blue-400" />, text: "Free incubation space with furnished office space, meeting and conference halls" },
    { icon: <FaLaptop className="text-green-400" />, text: "Uninterrupted electricity, and high-speed internet" },
    { icon: <FaLaptop className="text-yellow-400" />, text: "Access to engineering labs for research and product development" },
    { icon: <FaChalkboardTeacher className="text-purple-400" />, text: "Training and mentoring from a pool of professionals and mentors" },
    { icon: <FaNetworkWired className="text-red-400" />, text: "Socializing and networking opportunities" },
    { icon: <FaChartLine className="text-emerald-400" />, text: "Marketing and business consultancy" },
    { icon: <FaHandshake className="text-blue-400" />, text: "Financial and legal support" },
    { icon: <FaHandshake className="text-cyan-400" />, text: "Investment opportunities with leading local and foreign investors" },
    { icon: <FaGlobe className="text-purple-400" />, text: "Showcasing on national and international platforms" },
    { icon: <FaPhone className="text-green-400" />, text: "Telephonic lines, flexible timing, parking space" },
    { icon: <FaGlobe className="text-blue-400" />, text: "Presence on Mehran UET websites" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8 mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            What We Do?
          </motion.h1>
        </div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 md:p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Introduction</h2>
          <div className="space-y-4">
            <p>
              The Business Incubation Centre (BIC) at Mehran University of Engineering and Technology focuses on nurturing innovative ideas and engineering projects that generate significant value. Recognizing the wealth generated by technology companies today, BIC aims to enhance Pakistan's economic standing by leading the development of future tech startups within the country.
            </p>
            <p>
              In the context of the Fourth Industrial Revolution, BIC leverages advanced technologies and the extensive engineering talent at Mehran UET to spearhead future industry trends in Pakistan.
            </p>
          </div>
        </motion.section>

        {/* Target Technology Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Target Areas of Technology</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#112240]/50 border border-blue-500/20 rounded-lg p-4 text-center hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-2">{area.icon}</div>
                <h3 className="font-medium">{area.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* University Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 md:p-8 shadow-lg"
        >
          <p className="mb-4">
            Situated at the heart of leading universities and institutes, with access to thousands of students, expert faculty, and PhD scholars, BIC offers a highly productive startup environment. The state-of-the-art laboratories and equipment at Mehran University of Engineering and Technology provide an excellent foundation for research and product development.
          </p>
        </motion.section>

        {/* Enrollment Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-xl border border-cyan-500/20 p-6 md:p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Enrollment at Business Incubation Centre National Expansion Plan of NIC Jamshoro</h2>
          <p className="mb-6">
            Situated at the heart of leading universities and institutes, with access to thousands of students, expert faculty, and PhD scholars, BIC offers a highly productive startup environment. The state-of-the-art laboratories and equipment at Mehran University of Engineering and Technology provide an excellent foundation for research and product development.
          </p>
          <p className="mb-6">
            The programme runs twice a year, with applications evaluated every three months. Preliminary accepted teams will be invited to pitch their ideas.
          </p>

          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
  onClick={() => window.open("https://nep.pitb.gov.pk/launchpad-application", "_blank")}
>
  Apply Now
</motion.button>

        </motion.section>

        {/* Incubation Program */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">The 12-Month Incubation Programme Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-[#112240]/50 border border-blue-500/20 rounded-lg p-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="text-xl mr-3 mt-0.5">{benefit.icon}</div>
                  <p>{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process and Criteria */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pre-Incubation Process */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Pre-Incubation Registration Process</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Register for the pre-incubation phase</li>
              <li>Review of applications</li>
              <li>Team interviews</li>
              <li>Pre-incubation pitching</li>
              <li>Announcement of shortlisted startups for incubation</li>
              <li>Orientation and contract signing</li>
              <li>Physical/Virtual incubation for one year</li>
            </ol>
          </motion.section>

          {/* Qualification Criteria */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Qualification Criteria</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>ICT-based or ICT-related</li>
              <li>Innovative and advanced compared to existing solutions</li>
              <li>Supported by a working prototype</li>
              <li>Led by young entrepreneurs or those with entrepreneurial traits</li>
              <li>Offers a solution to a real market problem</li>
              <li>Uses information technology as a core product or service enabler</li>
              <li>Has commercialization potential</li>
              <li>Economically viable and scalable</li>
              <li>Entrepreneurs with prototypes or startups less than a year old</li>
              <li>Not incubated in another incubator or accelerator simultaneously</li>
            </ul>
          </motion.section>
        </div>

        {/* Evaluation Criteria */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4 text-cyan-400">Evaluation Criteria</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Uniqueness and commercialization potential of the proposed service/product</li>
            <li>Clearly defined target markets with high growth potential</li>
            <li>Well-defined competitor analysis</li>
            <li>Competitive advantage of the service/product</li>
            <li>Skills and expertise of the management team</li>
            <li>Prototype maturity</li>
          </ul>
        </motion.section>

        {/* Entrepreneurship Clinics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4 text-cyan-400">Entrepreneurship Clinics</h2>
          <p className="text-blue-200">
            [Additional information about Entrepreneurship Clinics can be added here]
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;