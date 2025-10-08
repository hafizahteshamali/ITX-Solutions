"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { NavLink } from "react-router-dom";

const textContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1 * i,
    },
  }),
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const CustomGlobal = ({ clientsName = [], CustomGlobalData }) => {
  const duplicatedClients = [...clientsName, ...clientsName, ...clientsName]

  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const servicesRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: false, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.4 });
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });

  const { heading, text, bulletText, imgUrl, services } = CustomGlobalData;

  return (
    <div>
      {/* ================= CLIENT LOGO SLIDER ================= */}
      <div className="container mx-auto py-8" style={{ background: "#f3f3fa" }}>
        <div className="w-[80%] mx-auto relative overflow-hidden">
          <div
            className="flex animate-slide-left-smooth"
            style={{ width: `${duplicatedClients.length * 250}px` }}
          >
            {duplicatedClients.map((src, index) => (
              <div key={index} className="px-4 flex-shrink-0" style={{ width: "250px" }}>
                <div className="h-[150px] sm:h-24 md:h-28 p-2 flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Kundenlogo ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="fade-left"></div>
          <div className="fade-right"></div>
        </div>

        <style jsx>{`
          :root {
            --bg: #cbe1ff;
          }

          @keyframes slide-left-smooth {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-slide-left-smooth {
            animation: slide-left-smooth 35s linear infinite;
          }

          .fade-left {
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 100%;
            background: linear-gradient(to right, var(--bg) 0%, transparent 100%);
            pointer-events: none;
            z-index: 10;
          }

          .fade-right {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100%;
            background: linear-gradient(to left, var(--bg) 0%, transparent 100%);
            pointer-events: none;
            z-index: 10;
          }

          @media (max-width: 768px) {
            .fade-left,
            .fade-right {
              width: 50px;
            }
          }
        `}</style>
      </div>

      {/* ================= HEADING SECTION ================= */}
      <div className="container mx-auto">
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <div ref={headingRef} className="text-center">
            <motion.h1
              className="text-2xl lg:text-6xl lg:w-[55%] leading-snug mx-auto font-[500] text-[#03278D]"
              variants={textContainer}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              {heading.split("").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="lg:w-[45%] mx-auto my-5 text-[#03278D99] text-sm"
              variants={textContainer}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              {text.split(" ").map((word, i) => (
                <motion.span key={i} variants={letter} className="inline-block mr-1">
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isHeadingInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="h-[15px] w-[15px] bg-[#0043FF] rounded-full blink-dot"></div>
              <p className="text-[#0043FF] text-sm">{bulletText}</p>
            </motion.div>
          </div>

          {/* ================= IMAGE SECTION (WITH ANIMATION) ================= */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={isImageInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full mt-[50px] overflow-hidden"
          >
            <motion.img
              src={imgUrl}
              alt="Custom Global Banner"
              className="w-full border border-gray-400 rounded-t-xl shadow-lg"
              transition={{ type: "spring", stiffness: 80 }}
            />
          </motion.div>

          {/* ================= SERVICES SECTION ================= */}
          <motion.div
            ref={servicesRef}
            initial={{ y: 100, opacity: 0 }}
            animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap lg:justify-between justify-center items-start border border-gray-500"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isServicesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`w-[95%] md:w-[45%] lg:w-[32%] h-[100%] bg-[#D8D8D88F] flex flex-col justify-start items-center overflow-hidden ${
                  item.borderr ? 'lg:border-r border-[#0d99ff]' : ''
                }`}
              >
                <div className="w-[90%] mx-auto">
                  <img src={item.img} className="w-full" alt="Dienstleistungsbild" />
                  <div className="min-h-[400px] w-full flex justify-center flex-col items-start my-5 p-0">
                    <motion.div
                      className="w-[95%] flex flex-col justify-center items-start gap-5"
                      variants={textContainer}
                      initial="hidden"
                      animate={isServicesInView ? "visible" : "hidden"}
                    >
                      <motion.h1 className="text-2xl font-[500] text-[#03278D]" variants={textContainer}>
                        {item.smHead.split("").map((char, i) => (
                          <motion.span key={i} variants={letter}>
                            {char}
                          </motion.span>
                        ))}
                      </motion.h1>

                      <motion.p className="text-sm font-[400] text-[#03278D99]" variants={textContainer}>
                        {item.description.split(" ").map((word, i) => (
                          <motion.span key={i} variants={letter} className="inline-block mr-1">
                            {word}
                          </motion.span>
                        ))}
                      </motion.p>

                      <NavLink
                        className="w-[50%] rounded-4xl bg-[#FFFFFF1A] text-sm py-2 flex justify-center items-center border-2 text-[var(--text-color)] border-white"
                        to={item.btnLink}
                      >
                        <motion.span variants={textContainer}>
                          {item.btnText.split("").map((char, i) => (
                            <motion.span key={i} variants={letter}>
                              {char}
                            </motion.span>
                          ))}
                        </motion.span>
                      </NavLink>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CustomGlobal
