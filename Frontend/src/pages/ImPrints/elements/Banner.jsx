"use client"

import { useInView, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Header from "../../../navigation/Header"

const AnimatedLetters = ({ text, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03 },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  }

  const words = text.split(/(\s+)/).filter((word) => word.length > 0)

  return (
    <motion.div
      ref={ref}
      className={`${className || ""} flex flex-wrap justify-center text-center`}
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
  )
}

const ContentSection = ({ content, borderr, onViewportEnter, isFirst }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "0px 0px -50% 0px" })

  useEffect(() => {
    if (isInView) {
      onViewportEnter()
    }
  }, [isInView, onViewportEnter])

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className={!borderr ? "mb-6 pb-6" : "mb-6 py-6 border-b-2 border-[#00254b2c]"}>
        <motion.div
          className="text-[#03278D] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isFirst ? 0.4 : 0.2 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.div>
    </motion.section>
  )
}

const ImprintPage = () => {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const [activatedSections, setActivatedSections] = useState(new Set([0]))

  const imprintSections = [
    {
      content: `
        <p>ITX Solutions</p>
        <p>Rechtsform: ITX Solutions GmbH</p>
        <p>Registered office / Adresse:</p>
        <p>Musterstraße 123, 10115 Berlin, Deutschland</p>
        <p>10115 Berlin</p>
        <p>Deutschland</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Kontakt:</p>
        <p>Telefon: +49 30 12345678</p>
        <p>E-Mail: itx.solution22@gmail.com</p>
        <p>Website: https://www.itx-solution.com/</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Vertreten durch / Geschäftsführer:</p>
        <p>Max Mustermann</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Firmenregistrierung:</p>
        <p>Registriert bei: Amtsgericht Berlin-Charlottenburg</p>
        <p>Handelsregisternummer: HRB 123456</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Steuern</p>
        <p>Umsatzsteuer-Identifikationsnummer: DE123456789</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Verantwortlich für den Inhalt:</p>
        <p>Max Mustermann, Musterstraße 123, 10115 Berlin, Deutschland</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Berufshaftung / Aufsichtsbehörde (falls zutreffend):</p>
        <p>Berufsbezeichnung und Ausstellungsland: IT-Dienstleistungen, Deutschland</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Streitbeilegung / Online-Streitbeilegungsplattform (EU-Verkäufer):</p>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: http://ec.europa.eu/consumers/odr/. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Urheberrecht & Markenhinweis:</p>
        <p>Alle Inhalte auf dieser Website (Texte, Bilder, Design, Logos) sind urheberrechtlich geschützt. Inhalte dürfen nicht ohne vorherige schriftliche Zustimmung von ITX Solutions reproduziert, verbreitet oder modifiziert werden.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Haftungsbeschränkung:</p>
        <p>Die Informationen auf dieser Website werden "wie besehen" bereitgestellt. ITX Solutions unternimmt angemessene Anstrengungen, um Inhalte aktuell und korrekt zu halten, übernimmt jedoch keine Gewähr für Vollständigkeit, Richtigkeit oder Eignung für einen bestimmten Zweck. ITX Solutions haftet nicht für indirekte oder Folgeschäden, soweit gesetzlich zulässig.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Externe Links:</p>
        <p>Diese Website kann Links zu Websites Dritter enthalten. ITX Solutions ist nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser Websites.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Datenschutz & Datensicherheit:</p>
        <p>Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung: [Link zur Datenschutzerklärung].</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Kontakt für rechtliche Hinweise:</p>
        <p>Für rechtliche Hinweise oder Löschersuchen wenden Sie sich bitte an: itx.solution22@gmail.com</p>
        <p><strong>Inkrafttretensdatum:</strong> 12.08.2025</p>
      `,
      borderr: false
    },
  ]

  useEffect(() => {
    setActiveSection(0)
    setActivatedSections(new Set([0]))
  }, [])

  const handleSectionEnter = (index) => {
    setActiveSection(index)
  }

  return (
    <div className="relative" ref={containerRef}>
      <Header />

      <div className="min-h-[600px] w-full relative overflow-hidden">
        <motion.img
          src="/assets/images/about/top-banner-bg.png"
          alt=""
          className="absolute top-0 right-0 object-cover w-full h-full"
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{
            duration: 3.5,
            ease: [0.16, 0.77, 0.47, 0.97],
            delay: 0.2,
          }}
        />

        <div className="container mx-auto w-full mt-[200px] xl:w-[80%] px-4 sm:px-6 lg:px-8 absolute left-[50%] transform -translate-x-[50%]">
          <AnimatedLetters
            text="Impressum – Rechtliche Informationen"
            className="text-4xl lg:text-5xl xl:text-6xl font-[500] text-[#03278D] lg:leading-[1.2]"
          />
          <AnimatedLetters
            text="Dieses Impressum enthält wesentliche rechtliche Angaben zu ITX Solutions, einschließlich Eigentumsverhältnissen, Kontaktdaten und Geschäftsinformationen gemäß den anwendbaren Gesetzen."
            className="text-[#03278D] mt-5 w-full lg:w-[100%] mx-auto text-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row mb-[100px]">
        {/* Static Left Side Title */}
        <div className="block lg:w-1/4 lg:pr-8 mb-8 lg:mb-0 sticky top-20 self-start lg:h-[calc(100vh-80px)]">
          <div className="pl-6">
            <h2 className="text-[18px] px-2 border-l-3 border-[#03278D] font-[500] text-[#03278D] sticky top-20">
              Impressum / Rechtlicher Hinweis
            </h2>
          </div>
        </div>

        {/* Content Sections */}
        <div className="block lg:w-3/4 lg:border-l-2 lg:border-[#00254b2c] lg:pl-8">
          {imprintSections.map((section, index) => (
            <ContentSection
              key={index}
              borderr={section.borderr}
              content={section.content}
              onViewportEnter={() => handleSectionEnter(index)}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImprintPage