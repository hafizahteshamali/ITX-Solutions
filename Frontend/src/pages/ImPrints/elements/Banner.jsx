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
        <p><strong>Firmenname:</strong> IT XSolutions eU</p>
        <p><strong>Inhaber:</strong> Ing. Haider Khan, MBA, MMSc.</p>
        <p><strong>Adresse:</strong> Rokitanskygasse 11 / Top 2, 1170 Wien, Österreich</p>
        <br/>
        <p><strong>Firmendaten:</strong></p>
        <p><strong>Firmenbuchnummer:</strong> FN 305053 h</p>
        <p><strong>Firmenbuchgericht:</strong> Handelsgericht Wien</p>
        <p><strong>UID-Nummer:</strong> ATU69022318</p>
        <p><strong>Kammerzugehörigkeit:</strong> Wirtschaftskammer Wien</p>
        <p><strong>Gewerbeordnung:</strong> www.ris.bka.gv.at</p>
        <p><strong>Aufsichtsbehörde:</strong> Magistratisches Bezirksamt für den 17. Bezirk</p>
        <p><strong>Website:</strong> www.itx-solution.com</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Kontakt:</strong></p>
        <p><strong>E-Mail:</strong> office@itx-solutions.com</p>
        <p><strong>Telefon:</strong> +43 677 62376793</p>
        <p><strong>Website:</strong> www.itx-solutions.com</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Vertreten durch / Geschäftsführer:</strong> Ing. Haider Khan, MBA, MMSc.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Firmenregistrierung:</strong></p>
        <p><strong>Registriert bei:</strong> Handelsgericht Wien</p>
        <p><strong>Firmenbuchnummer:</strong> FN 305053 h</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Steuerinformationen:</strong></p>
        <p><strong>Umsatzsteuer-Identifikationsnummer:</strong> ATU69022318</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Verantwortlich für den Inhalt:</strong></p>
        <p>Ing. Haider Khan, MBA, MMSc., Rokitanskygasse 11 / Top 2, 1170 Wien, Österreich</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Berufshaftung / Aufsichtsbehörde:</strong></p>
        <p>Berufsbezeichnung: IT-Dienstleistungen, Österreich</p>
        <p>Zuständige Aufsichtsbehörde: Magistratisches Bezirksamt für den 17. Bezirk, Wien</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Streitbeilegung / Online-Streitbeilegungsplattform:</strong></p>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit: 
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a>. 
        Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Urheberrecht & Markenhinweis:</strong></p>
        <p>Alle Inhalte auf dieser Website (Texte, Bilder, Design, Logos, Grafiken) sind urheberrechtlich geschützt. 
        Die Vervielfältigung, Verarbeitung, Verbreitung und jede andere Art der Verwendung außerhalb der Grenzen des Urheberrechts 
        bedürfen der vorherigen schriftlichen Zustimmung von ITX Solutions. Downloads und Kopien dieser Seite sind nur für den privaten, 
        nicht kommerziellen Gebrauch gestattet.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Haftungsausschluss:</strong></p>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und 
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG 
        für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Externe Links:</strong></p>
        <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten 
        Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Datenschutz & Datensicherheit:</strong></p>
        <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten 
        personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, 
        stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
        <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken 
        aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
        <p>Ausführliche Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p><strong>Kontakt für rechtliche Angelegenheiten:</strong></p>
        <p>Für rechtliche Hinweise, Löschersuchen oder datenschutzrechtliche Anliegen wenden Sie sich bitte an: 
        <strong>office@itx-solutions.com</strong></p>
        <p><strong>Inkrafttretensdatum:</strong> 12. August 2025</p>
        <p><strong>Letzte Aktualisierung:</strong> 12. August 2025</p>
      `,
      borderr: false
    }
  ];
  

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