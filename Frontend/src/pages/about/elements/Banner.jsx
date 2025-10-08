import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../../navigation/Header"; // Apne path ke according import karo

// Animated Letters Component
const AnimatedLetters = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  };

  const words = text.split(/(\s+)/).filter((word) => word.length > 0);

  return (
    <motion.div
      ref={ref}
      className={`${className} flex flex-wrap justify-center text-center`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="inline-flex whitespace-pre-wrap">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

// Banner Component
const Banner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] } },
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* ✅ Header always on top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Background Image Section */}
      <div className="min-h-[900px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] w-full relative overflow-hidden">
        <motion.img
          src="/assets/images/about/top-banner-bg.png"
          alt=""
          className="absolute top-0 right-0 object-cover w-full h-full"
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 3.5, ease: [0.16, 0.77, 0.47, 0.97], delay: 0.2 }}
        />

        {/* Main Heading */}
        <div className="container mx-auto w-full xl:w-[100%] px-4 sm:px-6 lg:px-8 absolute left-1/2 top-[60%] lg:top-1/2 transform -translate-x-1/2 -translate-y-[350%] sm:-translate-y-[250%] md:-translate-y-[260%] lg:-translate-y-[250%] xl:-translate-y-[150%]">
          <motion.div
            className="w-full mx-auto flex flex-col justify-center items-center text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <AnimatedLetters
              text="Den schnellsten Weg zu skalierbaren, sicheren und innovativen technischen Lösungen schaffen"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium md:font-[500] leading-snug sm:leading-relaxed md:leading-tight lg:leading-tight text-[#03278D]"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          className="absolute bottom-0 w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3, ease: [0.16, 0.77, 0.47, 0.97] }}
        >
          <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 h-full py-8 md:py-12 lg:py-16">
            <motion.div
              className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Left Column */}
              <motion.div className="w-full lg:w-[40%]" variants={itemVariants}>
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug lg:leading-14 text-[#03278D] font-medium md:font-[500]">
                Ihre Daten. Eine Plattform. Unendliche Möglichkeiten.
                </h1>
              </motion.div>

              {/* Right Column */}
              <motion.div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6" variants={containerVariants}>
                <motion.p className="text-sm sm:text-base md:text-lg text-[#03278D99] font-normal" variants={itemVariants}>
                ITX bündelt all Ihre digitalen Anforderungen in einer einheitlichen Technologieplattform, die Webentwicklung, KI-Tools, Grafikdesign und IT-Dienstleistungen in einer einzigen Schnittstelle vereint. Schluss mit dem Jonglieren zwischen mehreren Anbietern oder verstreuten Arbeitsabläufen.
                </motion.p>
                <motion.p className="text-sm sm:text-base md:text-lg text-[#03278D99] font-normal" variants={itemVariants}>
                Unsere Kunden erhalten vollständige Transparenz in jeder Phase ihrer Projekte, reduzieren Gemeinkosten und befähigen ihre Teams, schneller und mit größerem Selbstvertrauen zu agieren. Von der Erstellung von Spezifikationen und dem Design von Schnittstellen bis zur Bereitstellung von Infrastruktur und kontinuierlichem Support – ITX erledigt alles.
                </motion.p>
                <motion.p className="text-sm sm:text-base md:text-lg text-[#03278D99] font-normal" variants={itemVariants}>
                Unterstützt von modernen Frameworks und KI-gesteuerter Automatisierung schafft ITX eine einzige Quelle der Wahrheit, indem Code-Repositories, Datenpipelines, Design-Assets und Systemmonitoring verbunden werden. Unabhängig vom technischen Kenntnisstand kann jeder Beteiligte mühelos erkunden, zusammenarbeiten und Erkenntnisse in Maßnahmen umsetzen.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;