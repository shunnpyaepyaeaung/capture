import React from "react";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </motion.div>
  );
};

export default AboutUs;
