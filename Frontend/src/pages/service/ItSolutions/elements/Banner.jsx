import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../../../navigation/Header";
import NormalButton from "../../../../components/NormalButton";
import { useNavigate } from "react-router-dom";

const Banner = ({ clientsName = [] }) => {
  const duplicatedClients = [...clientsName, ...clientsName, ...clientsName];
  const navigate = useNavigate();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const AnimatedLetters = ({ text, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 }); // Changed amount to 0.1 and once to false

    const container = {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.03 },
      },
    };

    const letter = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
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
              <motion.span
                key={charIndex}
                variants={letter}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <Header />

        <div className="h-[800px] lg:h-[920px] w-full flex flex-col justify-end items-center">
          <div className="h-[650px] lg:h-[800px] w-full flex flex-col justify-between items-center">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="py-2 px-3 my-5 bg-[#03278D] w-[90%] lg:w-[30%] mx-auto rounded-full flex justify-center items-center"
            >
              <p className="text-[var(--white-color)] text-sm">
                Zuverlässig. Skalierbar. Immer verfügbar.
              </p>
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl w-full lg:text-7xl my-5 lg:leading-20 text-center lg:w-[70%] mx-auto font-[600] text-[#03278D]"
            >
              Die digitale Infrastruktur, die Ihre Vision braucht
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#03278D99] my-5 text-sm w-[90%] lg:w-[60%] mx-auto text-center"
            >
              Unser Expertenteam entwirft, implementiert und verwaltet
              zuverlässige IT-Systeme, die auf Ihre Geschäftsziele zugeschnitten
              sind, damit Sie sich auf Innovation konzentrieren können, während
              wir uns um die Technik kümmern.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="w-full flex justify-center items-center gap-5 mb-[100px]"
            >
              <NormalButton
                text="Mehr erfahren"
                className="h-[40px] w-[45%] lg:w-[12%] text-sm bg-[#03278D] rounded-full text-[var(--white-color)]"
              />
              <NormalButton
              onClick={()=>navigate('/contact')}
                text="Kontaktieren Sie uns"
                className="h-[40px] w-[45%] lg:w-[15%] text-sm bg-[#CBE1FF] rounded-full text-[var(--text-hover-color)]"
              />
            </motion.div>

            <motion.img
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              src="/assets/images/it-solutions/banner.png"
              className="object-cover h-[300px]"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Logo slider section with container */}
      <div className="w-full">
        {" "}
        {/* Container with padding */}
        <div className="h-[150px] bg-[#03278D] w-full mx-auto relative overflow-hidden">
          {" "}
          {/* Centered container with max-width */}
          <div className="w-full h-full absolute inset-0 flex items-center">
            {/* Logo slider content */}
            <div className="flex animate-slide-left-smooth">
              {[...duplicatedClients, ...duplicatedClients].map(
                (src, index) => (
                  <div
                    key={`logo-${index}`}
                    className="px-4 flex-shrink-0"
                    style={{ width: "250px" }}
                  >
                    <div className="h-[250px] flex justify-center items-center">
                      <img
                        src={src}
                        alt={`Kundenlogo ${index + 1}`}
                        className="h-[100%] max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Gradient fade overlays */}
          <div className="absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-white/60 via-white/40 to-transparent z-10 backdrop-blur-[3px]"></div>
          <div className="absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-white/60 via-white/40 to-transparent z-10 backdrop-blur-[3px]"></div>
          <style jsx>{`
            @keyframes slide-left-smooth {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-slide-left-smooth {
              animation: slide-left-smooth 40s linear infinite;
              will-change: transform;
            }

            @media (max-width: 768px) {
              .animate-slide-left-smooth {
                animation-duration: 30s;
              }
              .max-w-7xl {
                max-width: 100%;
                padding: 0 1rem;
              }
            }
          `}</style>
        </div>
      </div>

      <div className="container mx-auto mt-[100px]">
        <div className="w-[95%] mx-auto flex flex-col justify-center items-center text-center">
          <AnimatedLetters
            text="Wir sind ZMA-Solutions. Wir entwickeln maßgeschneiderte IT-Lösungen, die moderne Unternehmen stärken."
            className="text-xl lg:text-5xl font-[600] gradient-text lg:leading-tight leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
