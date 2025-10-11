
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const NavigationData = [
  {
    text: "Heim",
    path: "/",
  },
  {
    text: "Service",
    path: "", // ⛔ No route attached
    children: [
      {
        text: "KI-Entwicklung",
        path: "/service/ai-development",
      },
      {
        text: "Webentwicklung",
        path: "/service/web-development",
      },
      {
        text: "IT-Lösungen",
        path: "/service/it-solutions",
      },
      {
        text: "Grafikdesign",
        path: "/service/graphic-designing",
      },
    ],
  },
  {
    text: "Über uns",
    path: "/about-us",
  },
  {
    text: "Fallstudien",
    path: "/case-study",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Kontakt",
    path: "/contact",
  },
];

export const BannerData = {
  heading: "Digitale Exzellenz neu gedacht",
  para: "Wir gestalten Technologien, die Wachstum, Effizienz und nachhaltige Transformation ermöglichen. Unsere Lösungen verbinden Innovation mit Verlässlichkeit – für Unternehmen, die bereit sind, den nächsten Schritt zu gehen.",
  btnText: "Kostenlose Beratung anfordern",
  imgUrl: "/assets/images/home/banner-img.png",
};

export const experienceData = [
  {
    vector: "/assets/images/home/exp-1.png",
    head: "Intelligentere Lösungen, unterstützt durch KI",
    pg: "Maßgeschneiderte KI-Tools, Dokumentenanalysatoren, Chatbots und Empfehlungssysteme – zugeschnitten auf echte Geschäftsanforderungen. Feinabgestimmt und produktionsbereit.",
    fade: "fade-up",
    delay: "500"
  },
  {
    vector: "/assets/images/home/exp-2.png",
    head: "Web-Erlebnisse bereit für die Zukunft",
    pg: "Von Full-Stack-Apps bis hin zu E-Commerce-Plattformen – wir erstellen schnelle, responsive und zukunftssichere Websites, die für Web 4.0/5.0 optimiert sind.",
    fade: "fade-up",
    delay: "1000"
  },
  {
    vector: "/assets/images/home/exp-3.png",
    head: "Skalierbare IT-Teams, On-Demand",
    pg: "Mieten Sie dedizierte Entwickler, QA oder DevOps – stündlich oder monatlich – abgestimmt auf europäische Standards und Tools, die Sie bereits verwenden.",
    fade: "fade-up",
    delay: "1500"
  },
  {
    vector: "/assets/images/home/exp-4.png",
    head: "Wir Bauen. Wir Retten. Wir Skalieren.",
    pg: "Von der Idee bis zum Launch – oder Rettungseinsatz – übernehmen wir die Verantwortung für Ihr Tech-Projekt mit PMF-Beratung, Dokumentation und Skalierungsunterstützung.",
    fade: "fade-up",
    delay: "2000"
  },
  {
    vector: "/assets/images/home/exp-5.png",
    head: "Bewährte Ergebnisse in ganz Europa",
    pg: "Entdecken Sie, wie wir KI-Tools für Anwaltskanzleien entwickelt, E-Commerce-Backends skaliert, Bildungsplattformen gestärkt und kritische IT-Projekte gerettet haben.",
    fade: "fade-up",
    delay: "2500"
  },
];

export const AboutHeadingData = {
  heading: "Wir testen, bevor Sie sich ausruhen",
  des: "Rigoroses Testen und QA bedeuten, dass Ihr Produkt ohne Überraschungen live geht. Wir brechen es, damit Ihre Nutzer es nicht müssen.",
};

export const AboutContentData = {
  smHeading: "Über uns",
  lgHeading: "Angetrieben durch Innovation. Definiert durch Lieferung.",
  para: "ITX ist ein modernes IT-Unternehmen mit Sitz in Pakistan und einer europäischen Denkweise. Wir entwickeln skalierbare, sichere und innovative Tech-Lösungen mit starkem Fokus auf Künstliche Intelligenz und vollständige Projektabwicklung.",
  btnText: "Mehr erfahren",
  imgUrl: "/assets/images/home/bubble.png",
};

export const SeviceContent = {
  lgHeading: "Wie unsere Technologie Ideen zum Leben erweckt.",
  smHeading: "Sehen Sie, wie wir Erfolg aufbauen",
  description: "Vom Konzept bis zum Launch kombinieren wir intelligentes Design, fortgeschrittene Entwicklung und dedizierte Teams, um Ihre Vision in leistungsstarke, skalierbare digitale Lösungen zu verwandeln, die echte Wirkung erzielen.",
  btnText: "Mehr erfahren",
  imgUrl: "/assets/images/home/service-img.png",
};

export const tabs = [
  {
    number: "01",
    title: "Wir verstehen Ihre Vision",
    description: "Bevor Code geschrieben wird, konzentrieren wir uns darauf, Ihr Geschäftsmodell, Ihren Markt und die Erwartungen Ihrer Nutzer zu verstehen. Unser Ansatz ist inspiriert vom Beratungsstil Zentraleuropas, insbesondere Österreich und Deutschland. Wir stellen die richtigen Fragen und strukturieren den richtigen Plan, weil großartige digitale Lösungen mit Klarheit beginnen.",
  },
  {
    number: "02",
    title: "Wir entwerfen intelligente Lösungen",
    description: "Wir entwickeln digitale Produkte, die intuitiv, zuverlässig und zukunftssicher sind. Unsere UX- und Systemdesigns basieren auf europäischer Designlogik und Architekturprinzipien, die Kompatibilität mit lokalen Gesetzen, Usability-Standards und Unternehmensworkflows gewährleisten. Sie werden den Unterschied in unserem Denken und Strukturieren erkennen.",
  },
  {
    number: "03",
    title: "Wir bauen skalierbare Systeme",
    description: "Unser Engineering-Team erstellt robuste, sichere und skalierbare Systeme, die europäischen Standards entsprechen, einschließlich GDPR, Performance-Audits und Sicherheitsüberprüfungen. Von modularen Backend-Diensten bis zur Integration mit ERP- und CRM-Plattformen liefern wir die Grundlage für nachhaltiges digitales Wachstum.",
  },
  {
    number: "04",
    title: "Wir setzen Expertenteams ein",
    description: "Jedes Projekt wird von Spezialisten ausgeführt, die tiefes Domainwissen und professionelle Lieferkultur mitbringen. Wir arbeiten mit Tools und Praktiken, die in Österreich und Deutschland üblich sind, einschließlich strukturierter Dokumentation, Testprozessen und agilen Projektboards, die Fortschritt sichtbar und messbar machen.",
  },
  {
    number: "05",
    title: "Wir liefern mit Präzision",
    description: "Qualitätssicherung ist kein Nachgedanke.",
  },
];

export const FAQsHeadingData = {
  lgHeading: "Häufig gestellte Fragen",
  description: "Schnelle Antworten zu unseren Dienstleistungen, Prozessen und wie wir mit Kunden weltweit zusammenarbeiten.",
  FAQsTabs: [
    {
      question: "Welche Dienstleistungen bieten Sie an?",
      answer: "Wir bieten KI-Tools, Webentwicklung, IT-Outsourcing und komplette Projektabwicklung.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: false,
      fade: "flip-left",
      delay: "500"
    },
    {
      question: "Wie starten wir?",
      answer: "Buchen Sie einen Termin, wir bewerten Ihre Bedürfnisse und planen die nächsten Schritte.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: false,
      fade: "flip-left",
      delay: "1000"
    },
    {
      question: "Arbeiten Sie international?",
      answer: "Ja, wir arbeiten mit Kunden in ganz Europa und anderen Regionen. Unser remote-fähiges Team ist erfahren im Umgang mit internationalen Projekten mit klarer Kommunikation und zuverlässiger Lieferung.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: true,
      fade: "flip-left",
      delay: "1300"
    },
  ],
};

export const BringIdeasData = {
  imgUrl: "/assets/images/home/",
};

export const HelpSecData = {
  imgUrl: "/assets/images/home/help-section-img.png",
  heading: "Wir bauen mit Intelligenz",
  subTitle: "Sehen Sie, wie wir Ihnen helfen!",
  description: "Von KI-Tools bis zu kompletten Produktentwicklungen - unsere Lösungen sind gemacht, um zu denken, zu skalieren und zu performen.",
  bulletPara: "Stichpunkte:",
  bullets: [
    "Maßgeschneiderte KI & Automatisierung",
    "Full-Stack-Entwicklung",
    "Global-ready Lieferteams",
  ],
  btnText: "Jetzt kontaktieren",
};

export const FooterData = {
  logo: "/assets/images/home/logo.png",
  para: "Wir bauen skalierbare digitale Produkte mit KI, modernem Code und Expertenteams.",
  btnText: "Kontakt",
  socialHead: "Soziale Medien",
  socialIcons: [
    {
      icon: <FaFacebookF className="text-3xl text-white" />,
      link: "/",
    },
    {
      icon: <FaInstagram className="text-3xl text-white" />,
      link: "/",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-white" />,
      link: "/",
    },
  ],
  bullets: [
    {
      subHead: "Startseite",
      links: [
        {
          text: "Fallstudien",
          url: "/case-study",
        },
        {
          text: "Blog",
          url: "/blog",
        },
        {
          text: "Kontakt",
          url: "/contact",
        },
      ],
    },
    {
      subHead: "Unsere Dienstleistungen",
      links: [
        {
          text: "KI-Entwicklung",
          url: "/service/ai-development",
        },
        {
          text: "Webentwicklung",
          url: "/service/web-development",
        },
        {
          text: "Grafikdesign",
          url: "/service/graphic-designing",
        },
        {
          text: "IT-Outsourcing",
          url: "/service/it-solutions",
        }
      ],
    },
    {
      subHead: "Rechtliches",
      links: [
        {
          text: "Datenschutzerklärung",
          url: "privacy-policy",
        },
        {
          text: "Impressum",
          url: "imprint",
        }
      ],
    },
  ],
};


// Services Page


export const clientsName = [
  "/assets/images/home/ITX-Solution-White-png.png",
  "/assets/images/home/ITX-Solution-White-png.png",
  "/assets/images/home/ITX-Solution-White-png.png",
  "/assets/images/home/ITX-Solution-White-png.png",
  "/assets/images/home/ITX-Solution-White-png.png"
]

export const clientsName1 = [
  "/assets/images/home/logo.png",
  "/assets/images/home/logo.png",
  "/assets/images/home/logo.png",
  "/assets/images/home/logo.png",
  "/assets/images/home/logo.png"
]

export const CustomGlobalData = {
  heading: "Maßgeschneidert und global, die Aufgabe ist einfach.",
  text: "Von Frontend-Finesse bis Backend-Power liefern wir Full-Service-Web-Lösungen.",
  bulletText: "BAUEN . BETREIBEN . VERBESSERN",
  imgUrl: "/assets/images/service/service-toos-img.png",
  services: [
    {
      img: "/assets/images/service/service-1.png",
      smHead: "Visualisieren Sie, was funktioniert",
      description: "Unsere UI/UX-Wireframes verbinden jeden Berührungspunkt - von Websites und Mobile Apps bis zu Backend-Systemen - zu einer einheitlichen, benutzerzentrierten Struktur, die Klarheit, Usability und Konsistenz in jeder Phase der Customer Journey gewährleistet und Ihre digitale Präsenz ermächtigt, mit Vertrauen zu skalieren.",
      btnText: "Mehr erfahren",
      btnLink: "/",
      borderr: true
    },
    {
      img: "/assets/images/service/service-2.png",
      smHead: "Custom & WordPress",
      description: "ITX baut moderne, hochperformante Websites, die auf Ihre Bedürfnisse zugeschnitten sind - von vollständig custom-codierten Plattformen bis zu flexiblen, SEO-optimierten WordPress-Lösungen. Mit nahtlosem Design, schnellen Ladezeiten und skalierbarer Architektur sorgen wir dafür, dass Ihre Online-Präsenz herausragt und mit Ihnen wächst.",
      btnText: "Mehr erfahren",
      btnLink: "/",
      borderr: true
    },
    {
      img: "/assets/images/service/service-3.png",
      smHead: "Scrollen. Animieren. Beeindrucken.",
      description: "Bei ITX erstellen wir flüssige, wirkungsvolle Animationen, die Ihre Website zum Leben erwecken - von subtilen Mikrointeraktionen bis zu vollständig scrollbasiertem Storytelling. Ob für Branding, Produktpräsentationen oder immersives UX - unsere Animationen steigern Engagement, verbessern Retention und machen jedes Scrollen unvergesslich.",
      btnText: "Mehr erfahren",
      btnLink: "/",
      borderr: false
    },
  ]
}


export const DesignGlobalData = {
  heading: "Maßgeschneidert und global, die Aufgabe ist einfach.",
  text: "Von Frontend-Finesse bis Backend-Power liefern wir Full-Service-Web-Lösungen.",
  bulletText: "BAUEN . BETREIBEN . VERBESSERN",
  services: [
    {
      img: "/assets/images/service/design-card1.png",
      smHead: "Design & Launch",
      description: "Durch initiale Konzept-Workshops und UX/UI-Sessions erstellen wir detaillierte Wireframes und interaktive Prototypen, dann führen wir agile Development-Sprints durch. Mit kontinuierlichem User-Testing, Performance-Tuning und rigorosem QA verfeinern wir jedes Element, um eine polierte, production-ready Website zu liefern, die Ihre Ziele übertrifft und ein außergewöhnliches Launch-Erlebnis gewährleistet.",
      btnText: "Mehr erfahren",
      btnLink: "/",
      rightBorder: true,
      pl: true,
    },
    {
      img: "/assets/images/service/design-card2.png",
      smHead: "Warten & Optimieren",
      description: "Sobald Ihre Website live ist, überwachen wir proaktiv Uptime und Performance, wenden Security-Patches und Updates an und optimieren Server-Konfigurationen für Traffic-Spitzen. Wir führen regelmäßige Health-Checks, Backups und Performance-Audits durch und nutzen analytics-gesteuerte Erkenntnisse für iterative Verbesserungen - damit Ihre Site schnell, sicher und zuverlässig bleibt, während Ihr Business wächst.",
      btnText: "Mehr erfahren",
      btnLink: "/",
      rightBorder: false,
      pl: false,
    }
  ]
}

export const theriData = [
  {
    para1: "Bei weitem die beste Agentur, mit der ich zusammengearbeitet habe.",
    str: "Ihre Professionalität, Kreativität,",
    para2: "und Kommunikation setzen einen neuen Standard für zukünftige Zusammenarbeiten.",
    name: "Georgia Millar",
    designation: "Gründer & CEO",
    image: "/assets/images/service/velra.png"
  },
  {
    para1: "„Professionell, kreativ und unglaublich responsive",
    str: "sie haben unsere Vision in eine kraftvolle Website verwandelt.",
    para2: "Das Endergebnis übertraf die Erwartungen.",
    name: "Sarah M",
    designation: "Marketing Director",
    image: "/assets/images/service/sclera.png"
  }
]

// AI Development

export const AiDevelopBannerData={
  heading: "ITX AI Studio.",
  subTitle: "Wir entwickeln maßgeschneiderte KI-Lösungen für innovative Unternehmen.",
  link1Text: "unsere Dienstleistungen",
  link1: "#service",
  link2Text: "kontaktieren Sie uns",
  link2: "/contact",
  heading2: "Wir sind ITX-Solutions. Wir entwickeln maßgeschneiderte KI-Lösungen für innovative Unternehmen.",
  btn: "Kontakt aufnehmen"
}


export const GraphicBannerData = {
  smText: "Kreativ",
  icon: "/assets/images/graphic-designing/start.svg",
  text: "Wir bauen Systeme, die so gut aussehen wie sie funktionieren.",
  heading: "Designs, die wie ein System funktionieren, nicht nur wie eine",
  highlight: "Leinwand"
}

export const WebReviews1 = [
  {
    description: "Die Zusammenarbeit mit Ihrem Team war nahtlos. Sie haben unsere E-Commerce-Site schneller als erwartet geliefert und mit besserer Performance als wir es uns vorgestellt hatten.",
    profileImg: "/assets/images/service/review1-img1.jpg",
    name: "Sarah Klein",
    designation: "CEO bei GreenCart"
  },
  {
    description: "Das Redesign hat komplett verändert, wie unsere Nutzer mit der Website interagieren. Sie ist schneller, cleaner und mobile-friendly - genau das, was wir brauchten.",
    profileImg: "/assets/images/service/review1-img2.jpg",
    name: "David Meier",
    designation: "Marketingleiter bei EventBuzz"
  },
  {
    description: "Vom ersten Meeting bis zum finalen Deployment hat Ihr Team klar kommuniziert und alles genau nach unseren Anforderungen geliefert.",
    profileImg: "/assets/images/service/review1-img3.jpg",
    name: "Ahmed Raza",
    designation: "Gründer von TechNova"
  },
  {
    description: "Wir haben innerhalb eines Monats nach dem Launch unserer neuen Landingpages eine 40%ige Steigerung der Konversionen gesehen. Danke für die unglaubliche Arbeit.",
    profileImg: "/assets/images/service/review1-img4.jpg",
    name: "Julia Weber",
    designation: "Digital Strategist bei WellNest"
  },
]


export const WebReviews2 = [
  {
    description: "Ihre Fähigkeit, unsere Geschäftsanforderungen zu verstehen und in eine maßgeschneiderte Web-Lösung zu verwandeln, war beeindruckend.",
    profileImg: "/assets/images/service/review2-img1.jpg",
    name: "Mohsin Ali",
    designation: "Operations Lead bei FinEdge"
  },
  {
    description: "Ich schätze, wie Ihr Team technisches Können mit Design Thinking kombiniert hat. Unsere Site ist nicht nur funktional - sie ist wunderschön.",
    profileImg: "/assets/images/service/review2-img2.jpg",
    name: "Elena Fischer",
    designation: "Creative Director bei Studio Bloom"
  },
  {
    description: "Das Backend-System, das Sie gebaut haben, hat 70% unserer manuellen Aufgaben automatisiert. Das ist ein totaler Game-Changer.",
    profileImg: "/assets/images/service/review2-img3.jpg",
    name: "Thomas Berger",
    designation: "CTO bei LogiLink"
  },
  {
    description: "Schneller Support, klare Kommunikation und erstklassiger Code - dieses Team weiß, was es tut.",
    profileImg: "/assets/images/service/review2-img4.jpg",
    name: "Lena Ahmad",
    designation: "Mitgründerin von EduTrail"
  }
]


export const FutureWorkData = {
  heading: "Zugang zur Zukunft der Arbeit",
  para: "Ermächtigen Sie Ihr Business mit modernster IT-Infrastruktur, intelligenter Automatisierung und Next-Gen-Support, damit Sie immer bereit sind für das, was kommt.",
}

export const FeaturesData ={
  title: "Unsere Features",
  heading: "Power. Schutz. Präzision.",
  para: "Ermächtigen Sie Ihr Business mit modernsten IT-Dienstleistungen, die Hochleistungssysteme, kontinuierliche Sicherheit und expertenhafte Präzision kombinieren - gebaut, um mit Ihrem Wachstum zu skalieren."
}


export const AIReviews1 = [
  {
    description: "Wir haben mit ihnen für einen custom AI-Chatbot zusammengearbeitet, und die Ergebnisse waren beeindruckend. Er bearbeitet jetzt 70% unserer Support-Anfragen ohne menschliches Eingreifen. Ein Game-Changer für unser Team!",
    profileImg: "/assets/images/ai-development/ai-review-1-1.jpg",
    name: "Isabella Meier",
    designation: "CX Lead, Talkify"
  },
  {
    description: "Ihr Team entwickelte ein Machine-Learning-Modell, das uns half, betrügerische Transaktionen in Echtzeit zu erkennen. Die Genauigkeit war phänomenal - sehr empfehlenswert.",
    profileImg: "/assets/images/ai-development/ai-review-1-2.jpg",
    name: "Rahul Sharma",
    designation: "Product Manager, ByteCore"
  },
  {
    description: "Wir hatten einen massiven Datensatz, den wir nicht interpretieren konnten. Ihre KI-Lösung gab uns sofortige, umsetzbare Erkenntnisse. Ihr Ansatz war schnell, fokussiert und ergebnisorientiert.",
    profileImg: "/assets/images/ai-development/ai-review-1-3.jpg",
    name: "Jonas Klein",
    designation: "Data Lead, Meditrack"
  },
  {
    description: "Vom ersten Anruf an war ihr Verständnis von KI-Implementierung solide. Sie halfen uns, repetitive Design-Aufgaben mühelos zu automatisieren.",
    profileImg: "/assets/images/ai-development/ai-review-1-4.jpg",
    name: "Felix Dubois",
    designation: "Innovation Manager, RetailSync"
  }
]

export const AIReviews2 = [
  {
    description: "Das Computer-Vision-Modell, das sie für unseren Qualitätskontrollprozess erstellt haben, reduzierte Fehler um über 80%. Exzellente Ausführung und Lieferung!",
    profileImg: "/assets/images/ai-development/ai-review-2-1.jpg",
    name: "Sara Khan",
    designation: "Head of Ops, AutoLens"
  },
  {
    description: "Sie verwandelten unsere statische Produktliste in ein intelligentes Empfehlungssystem. Das User-Engagement stieg drastisch!",
    profileImg: "/assets/images/ai-development/ai-review-2-2.jpg",
    name: "Michael Tran",
    designation: "Growth Marketer, NewsCraft"
  },
  {
    description: "Unsere E-Learning-Plattform bietet jetzt personalisierte Lernpfade - alles dank ihrer KI-Integration. Das UX ist next level!",
    profileImg: "/assets/images/ai-development/ai-review-2-3.jpg",
    name: "Ayesha Noor",
    designation: "Support Systems Lead, LearnSpace"
  },
  {
    description: "Sie bauten ein custom NLP-Modell für unsere internen Tools. Es versteht Befehle in natürlicher Sprache, was uns Stunden manueller Arbeit erspart hat.",
    profileImg: "/assets/images/ai-development/ai-review-2-4.jpg",
    name: "Emily Novak",
    designation: "Risk Analyst, FinWatch"
  }
]

export const GraphicReviews1 = [
  {
    description: "ITX-Solutions hat das Branding meines Boutique-Geschäfts komplett transformiert. Jedes Design fühlt sich anmutig und intentional an. Eine perfekte Mischung aus Kreativität und Professionalität.",
    profileImg: "/assets/images/graphic-designing/review-1-1.jpg",
    name: "Sarah Malik",
    designation: "Boutiquen-Besitzerin"
  },
  {
    description: "Jede Kampagnengrafik ist makellos. Sie liefern immer über die Erwartungen hinaus - und vor dem Zeitplan.",
    profileImg: "/assets/images/graphic-designing/review-1-2.jpg",
    name: "Ethan Brooks",
    designation: "Tech-Startup-Mitgründer"
  },
  {
    description: "Vom Logo bis zur Typografie - alles fühlte sich so stimmig an. Meine Markenidentität kam sofort zum Leben. Eine wirklich game-changing Erfahrung.",
    profileImg: "/assets/images/graphic-designing/review-1-3.jpg",
    name: "Liam Carter",
    designation: "Startup-Gründer"
  },
  {
    description: "Ihre Design-Sprache spricht Bände. Es ist selten, ein Team zu finden, das sowohl Vision als auch Details so gut versteht.",
    profileImg: "/assets/images/graphic-designing/review-1-4.jpg",
    name: "Nina Alvarez",
    designation: "Creative Director"
  }
]

export const GraphicReviews2 = [
  {
    description: "User-Interface-Design ist on point. Meine App sieht und fühlt sich jetzt zehnmal polierter an.",
    profileImg: "/assets/images/graphic-designing/review-2-1.jpg",
    name: "Noah Kim",
    designation: "App-Entwickler"
  },
  {
    description: "Verpackung, Produktvisuals, Banner - alles fühlt sich premium und kohärent an. Exzellente kreative Leitung.",
    profileImg: "/assets/images/graphic-designing/review-2-2.jpg",
    name: "Chloe Dubois",
    designation: "Social Media Beraterin"
  },
  {
    description: "Jedes visuelle Element, das sie berührt haben - von Menüs bis Schildern - fühlt sich jetzt modern und einprägsam an.",
    profileImg: "/assets/images/graphic-designing/review-2-3.jpg",
    name: "Bilal Khan",
    designation: "Restaurant-Besitzer"
  },
  {
    description: "Verpackung, Produktvisuals, Banner - alles fühlt sich premium und kohärent an. Exzellente kreative Leitung.",
    profileImg: "/assets/images/graphic-designing/review-2-4.jpg",
    name: "Farhan Qureshi",
    designation: "E-Commerce-Markeninhaber"
  }
]


export const ITSolutionReviews1 = [
  {
    description: "ITX-Solutions lieferte eine sichere und skalierbare IT-Infrastruktur für unsere wachsenden Bedürfnisse. Ihr Support war außergewöhnlich.",
    profileImg: "/assets/images/it-solutions/review-1-1.jpg",
    name: "Emily Chen",
    designation: "CEO, FinTech Solutions"
  },
  {
    description: "Ihr Echtzeit-System-Monitoring half uns, Probleme zu erkennen, bevor sie zu größeren Issues wurden. Zuverlässig und proaktiv.",
    profileImg: "/assets/images/it-solutions/review-1-2.jpg",
    name: "James O'Connor",
    designation: "Operations Manager, HealthTrack"
  },
  {
    description: "Von Cloud-Migration bis 24/7-Support - ihr Service ist erstklassig. Unsere Ausfallzeiten sanken auf fast Null.",
    profileImg: "/assets/images/it-solutions/review-1-3.jpg",
    name: "Carlos Mendes",
    designation: "Mitgründer, EduWave"
  },
  {
    description: "Der technische Support von ITX-Solutions ist schnell, klar und immer hilfreich. Wir fühlen uns nie im Dunkeln gelassen.",
    profileImg: "/assets/images/it-solutions/review-1-4.jpg",
    name: "Yuki Nakamura",
    designation: "IT-Leiter, RetailConnect"
  }
]

export const ITSolutionReviews2 = [
  {
    description: "Sie brachten Struktur und Sicherheit in unsere verstreuten Datensysteme. Jetzt funktioniert einfach alles reibungslos.",
    profileImg: "/assets/images/it-solutions/review-2-1.jpg",
    name: "Anastasia Petrova",
    designation: "CTO, Eventrix"
  },
  {
    description: "Sie vereinfachten unser komplexes IT-Setup und machten alles benutzerfreundlich. Eine unglaubliche Transformation.",
    profileImg: "/assets/images/it-solutions/review-2-2.jpg",
    name: "David Smith",
    designation: "Managing Director, MedGear"
  },
  {
    description: "Ihr Datenmanagement-Ansatz hält uns compliant und confident. Wirklich professioneller Service.",
    profileImg: "/assets/images/it-solutions/review-2-3.jpg",
    name: "Fatima El Amrani",
    designation: "Digital Project Manager"
  },
  {
    description: "Ihr Monitoring-Dashboard gibt uns peace of mind. Reibungslose Systeme, bessere Performance.",
    profileImg: "/assets/images/it-solutions/review-2-4.jpg",
    name: "Jonas Bergström",
    designation: "Mitgründer, WorkNest"
  }
]


// About Page
export const TailoredSectionData = {
  img: "/assets/images/about/tailored-img.jpg",
  heading: "Maßgeschneiderte Lösungen",
  description: "Bei ITX bringt unser remote-first Team weltklasse Webentwicklung, KI-Innovation, Grafikdesign und IT-Dienstleistungen zusammen - vereint durch Integrität, Respekt und eine Leidenschaft für Exzellenz. Wir treffen uns regelmäßig persönlich, um zusammenzuarbeiten, zu iterieren und sicherzustellen, dass jede Lösung die Erwartungen übertrifft. Scheitern ist keine Option - nur Wachstum durch mutige Ausführung.",
  btnText: "Mehr erfahren"
}

export const TrustedWorldWideData = {
  head: "Weltweit vertraut",
  NumberList: [
    {
      num: "500+",
      text: "Verarbeitete digitale Elemente",
      linkText: "Alle anzeigen",
      textLink: "/about-us"
    },
    {
      num: "25+",
      text: "Abgedeckte Zeitzonen",
      linkText: "Alle anzeigen",
      textLink: "/about-us"
    },
    {
      num: "86%+",
      text: "Erreichte Automatisierung",
      linkText: "Alle anzeigen",
      textLink: "/about-us"
    },
  ],
  lgText: "Wir helfen Unternehmen, manuelle Arbeitslast zu reduzieren, Sichtbarkeit zu erhöhen und Wachstum in Webentwicklung, KI-Dienstleistungen, Grafikdesign und IT-Lösungen zu beschleunigen.",
  serviceText: "Unsere Dienstleistungen",
  serviceLink: "/about-us",
  image: "/assets/images/about/trust-sec-img.jpg"
}

// Blog Page

export const BlogListData = [
  {
    imgUrl: "/assets/images/blog/blog-1-img.jpg",
    feature: "Hervorgehoben",
    title: "Aufbau ultra-skalierbarer Webplattformen: Von der MVP bis zur globalen Verteilung",
    slug: "building-ultra-scalable-web-platforms-from-mvp-to-global-distribution",
    updateDate: "",
    updateShow: false,
    description: "In diesem umfassenden Leitfaden führen wir Sie durch jede Phase der Architektur einer Webplattform, die von einer Handvoll Benutzer auf Millionen wachsen kann – ohne Aussetzer. Sie erfahren, wie Sie resiliente Microservice-Architekturen entwerfen, Containerisierung und Orchestrierung für elastische Skalierung nutzen und CDN-Strategien implementieren, die Inhalte weltweit mit Blitzgeschwindigkeit liefern. Wir behandeln auch Best Practices für Continuous Integration und Deployment, automatisiertes Performance-Monitoring und Security-Hardening – damit Sie mit Vertrauen bauen und Ihre Plattform reibungslos betreiben können, wenn die Nachfrage steigt. Ob Sie Ihr erstes SaaS-Produkt starten oder eine Enterprise-Systeme migrieren, diese bewährten Techniken helfen Ihnen, 2025 und darüber hinaus eine zuverlässige, kosteneffektive Skalierbarkeit zu erreichen.",
    btnText: "Mehr lesen",
    width: true,
  },
  {
    imgUrl: "/assets/images/blog/blog-2-img.jpg",
    feature: "Neueste Beiträge",
    title: "Die Psychologie der Farbe im Branding",
    slug: "the-psychology-of-color-in-branding",
    updateDate: "Hochgeladen am: 08-07-2025",
    updateShow: true,
    description: "Entdecken Sie die Wissenschaft hinter Farbwahl und deren emotionaler Wirkung auf Benutzer – erfahren Sie, wie Sie Paletten entwickeln, die die Markenpersönlichkeit stärken, die Wahrnehmung beeinflussen und Engagement über digitale und Print-Erlebnisse hinweg steigern...",
    btnText: "Mehr lesen",
    width: false,
  },
  {
    imgUrl: "/assets/images/blog/blog-3-img.jpg",
    feature: "Neueste Beiträge",
    title: "CI/CD für Designer: Automatisierung Ihres Workflows",
    slug: "ci-cd-for-designers-automating-your-workflow",
    updateDate: "Hochgeladen am: 08-07-2025",
    updateShow: true,
    description: "Lernen Sie, Figma und Code-Repositories mit automatisierten Pipelines, visuellen Regressionstests und Staging-Vorschauen zu integrieren – damit Design-Updates nahtlos in die Produktion übergehen, ohne manuelle Übergaben oder Versionskonflikte...",
    btnText: "Mehr lesen",
    width: false,
  },
  {
    imgUrl: "/assets/images/blog/blog-4-img.jpg",
    feature: "Neueste Beiträge",
    title: "Aufbau resilienter Microservice-Architekturen",
    slug: "building-resilient-microservice-architectures",
    updateDate: "Hochgeladen am: 08-07-2025",
    updateShow: true,
    description: "Entdecken Sie, wie Sie fehlertolerante Microservices entwerfen, die sich selbst heilen, automatisch skalieren und zuverlässig kommunizieren – mit Mustern wie Circuit Breakern, Service Meshes und Health-Check-Endpoints, um Ihre Plattform auch bei hoher Last reibungslos am Laufen zu halten...",
    btnText: "Mehr lesen",
    width: false,
  },
  {
    imgUrl: "/assets/images/blog/blog-5-img.jpg",
    feature: "Neueste Beiträge",
    title: "Ethische KI: Balance zwischen Innovation und Verantwortung",
    slug: "ethical-ai-balancing-innovation-and-responsibility",
    updateDate: "Hochgeladen am: 08-07-2025",
    updateShow: true,
    description: "Erkunden Sie Best Practices für die Entwicklung fairer, transparenter KI-Systeme – mit Schwerpunkten auf Bias-Minderung, erklärbaren Modellen und Data-Governance-Frameworks, die Ihnen helfen, verantwortungsvoll zu innovieren, ohne Vertrauen oder Compliance zu opfern...",
    btnText: "Mehr lesen",
    width: false,
  },
  {
    imgUrl: "/assets/images/blog/blog-6-img.jpg",
    feature: "Neueste Beiträge",
    title: "Zero-Trust-Sicherheit im Cloud-Zeitalter",
    slug: "zero-trust-security-in-the-cloud-era",
    updateDate: "Hochgeladen am: 08-07-2025",
    updateShow: true,
    description: "Tauchen Sie ein in Zero-Trust-Prinzipien für moderne Infrastrukturen – mit Identitätsverifikation, Least-Privilege-Zugriff, Microsegmentation und kontinuierlichen Überwachungsstrategien, die Ihre Cloud-Workloads vor sich entwickelnden Bedrohungen schützen...",
    btnText: "Mehr lesen",
    width: false,
  },
  {
    imgUrl: "/assets/images/blog/blog-7-img.jpg",
    feature: "Neueste Beiträge",
    title: "Mobile-First UX: Design für kleine Bildschirme",
    slug: "mobile-first-ux-designing-for-small-screens",
    updateDate: "Hochgeladen am: 08-07-2025",
    updateShow: true,
    description: "Meistern Sie die Kunst des Mobile-First-Designs mit Layout-Strategien, Performance-Optimierungen und Interaktionsmustern, die für Touch-Oberflächen maßgeschneidert sind – und stellen Sie sicher, dass Ihre Website Benutzer auf jedem Gerät begeistert...",
    btnText: "Mehr lesen",
    width: false,
  }
];

export const SidebarBlogsData = [
  {
    topText: "Heute hervorgehoben",
    topLine: true,
    img: "/assets/images/blog/blog-8-img.jpg",
    feature: "Neueste Beiträge",
    title: "DevOps für Designer: Überbrückung der Lücke",
    slug: "devops-for-designers-bridging-the-gap",
    btnText: "Mehr lesen",
  },
  {
    topText: "Kategorie",
    topLine: true,
    img: "/assets/images/blog/blog-8-img.jpg",
    feature: "Neueste Beiträge",
    title: "DevOps für Designer: Überbrückung der Lücke",
    slug: "devops-for-designers-bridging-the-gap",
    btnText: "Mehr lesen",
  },
  {
    topText: "Kategorie",
    topLine: false,
    img: "/assets/images/blog/blog-8-img.jpg",
    feature: "Neueste Beiträge",
    title: "DevOps für Designer: Überbrückung der Lücke",
    slug: "devops-for-designers-bridging-the-gap",
    btnText: "Mehr lesen",
  },
  {
    topText: "Kategorie",
    topLine: false,
    img: "/assets/images/blog/blog-8-img.jpg",
    feature: "Neueste Beiträge",
    title: "DevOps für Designer: Überbrückung der Lücke",
    slug: "devops-for-designers-bridging-the-gap",
    btnText: "Mehr lesen",
  },
]


// ✅ Single source of truth
export const ServiceBannerData = {
  heading: "Ihr Full-Stack-Partner für skalierbare Web-Lösungen",
  buttons: [
  {
    id: 1,
    text: "Velraa",
    caseStudyText: "Fallstudie",
    slug: "velraa",
    visitText: "Besuchen",
    visitUrl: "https://velraa.com/",
    img: "/assets/images/service/banner-img1.jpg",
    video1: "/assets/images/service/mobile-guru1.mp4",
    video2: "/assets/images/service/mobile-guru2.mp4",
    img1Url: "/assets/images/case-study/velra-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: true,
    websiteUrl: "https://velraa.com/",
    projectName: "Velraa",
    runningOn: "2024 – Heute",
    tech: "Replatforming, UI/UX & E-Commerce",
    phases: ["DESIGN", "BERATUNG", "AUFBAU"],
    category: "SCHMUCK & BEKLEIDUNG",
    aboutPara: "Bei ITX-Solutions haben wir mit Velraa zusammengearbeitet, um deren E-Commerce-Erlebnis für handgefertigten Schmuck zu verbessern. Wir begannen mit der Erstellung eines robusten Design-Systems in Figma – komplett mit pixelgenauen Layouts, „As Seen In“-Galerien und dynamischen Produktdetail-Komponenten – und setzten es dann in WordPress mit einem maßgeschneiderten Gutenberg-Theme um. Unsere Implementierung integriert nahtlos kostenlose Versandschwellen, 14-tägige Rückgaben, Newsletter-Anmeldungen und Echtzeit-Bestandsaktualisierungen, während gleichzeitig Performance, SEO und mobile First-Optimierung im Fokus stehen.",
    services: [
      {
        heading: "DESIGN",
        taggs: ["FIGMA DESIGN SYSTEM", "RESPONSIVES PROTOTYPING", "INTERAKTIVE WIREFRAMES", "DESIGN TOKENS", "STYLE GUIDES"]
      },
      {
        heading: "ENTWICKLUNG",
        taggs: ["WORDPRESS THEME ENTWICKLUNG", "GUTENBERG BLOCK ERSTELLUNG", "WOOCOMMERCE EINRICHTUNG", "ACF IMPLEMENTIERUNG", "CUSTOM PLUGIN ENTWICKLUNG", "LEISTUNGSOPTIMIERUNG", "SEO KONFIGURATION", "CDN & CACHING", "CI/CD DEPLOYMENT", "QA & CROSS-BROWSER-TESTING"]
      }
    ],
    integration: [
      "Google Analytics", "Google Tag Manager", "Mailchimp Newsletter", "WooCommerce", "Stripe & Klarna Payments", "LiveChat & WhatsApp Support", "Instagram Feed Widget", "Yoast SEO", "WPML Multilingual", "Cloudflare CDN", "GitHub Actions CI/CD", "Sentry Error Monitoring", "ACF REST API", "Newsletter Popup (OptinMonster)", "SMTP (SendGrid)", "Webhooks für Bestellbenachrichtigungen"
    ],
    keyFeatures: [
      "Responsives, mobile-first Design",
      "Maßgeschneidertes WordPress-Theme mit Gutenberg",
      "WooCommerce-Integration",
      "Produktkategorien mit Filterung",
      "„As Seen In“-Galeriemodul",
      "Mehrsprachiger Support via WPML",
      "SEO-Optimierung mit Yoast SEO",
      "Maßgeschneiderte Produktdetailseiten",
      "Geschenkgarten-Produkteinrichtung",
      "Newsletter-Popup mit Mailchimp-Integration",
      "Newsletter-Rabattautomatisierung (10 % Rabatt)",
      "Kostenlose Versandlogik (€35+)",
      "14-tägige Rückgaberichtlinien-Integration",
      "Instagram-Feed-Widget",
      "Ringgrößen- & Kettenlängen-Guides",
      "WhatsApp-Support-Button",
      "Live-Chat-Integration",
      "Styling-Tipps & Blog-Bereich",
      "Sichere Zahlungen via Stripe, Klarna & PayPal",
      "Leistungsoptimierung (Cloudflare CDN, Caching)",
      "Grundlegende Sicherheitseinrichtung (SSL, Anti-Spam)"
    ]
  },
  {
    id: 2,
    text: "Mobile Guru",
    caseStudyText: "Fallstudie",
    slug: "mobile-guru",
    visitText: "Besuchen",
    visitUrl: "https://mobileguru.at/",
    img: "/assets/images/service/mobile-guru.png",
    video1: "/assets/images/service/mobile-guru1.mp4",
    video2: "/assets/images/service/mobile-guru2.mp4",
    img1Url: "/assets/images/case-study/velra-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: true,
    websiteUrl: "https://velraa.com/",
    projectName: "Velraa",
    runningOn: "2024 – Heute",
    tech: "Replatforming, UI/UX & E-Commerce",
    phases: ["DESIGN", "BERATUNG", "AUFBAU"],
    category: "SCHMUCK & BEKLEIDUNG",
    aboutPara: "Bei ITX-Solutions haben wir mit Velraa zusammengearbeitet, um deren E-Commerce-Erlebnis für handgefertigten Schmuck zu verbessern. Wir begannen mit der Erstellung eines robusten Design-Systems in Figma – komplett mit pixelgenauen Layouts, „As Seen In“-Galerien und dynamischen Produktdetail-Komponenten – und setzten es dann in WordPress mit einem maßgeschneiderten Gutenberg-Theme um. Unsere Implementierung integriert nahtlos kostenlose Versandschwellen, 14-tägige Rückgaben, Newsletter-Anmeldungen und Echtzeit-Bestandsaktualisierungen, während gleichzeitig Performance, SEO und mobile First-Optimierung im Fokus stehen.",
    services: [
      {
        heading: "DESIGN",
        taggs: ["FIGMA DESIGN SYSTEM", "RESPONSIVES PROTOTYPING", "INTERAKTIVE WIREFRAMES", "DESIGN TOKENS", "STYLE GUIDES"]
      },
      {
        heading: "ENTWICKLUNG",
        taggs: ["WORDPRESS THEME ENTWICKLUNG", "GUTENBERG BLOCK ERSTELLUNG", "WOOCOMMERCE EINRICHTUNG", "ACF IMPLEMENTIERUNG", "CUSTOM PLUGIN ENTWICKLUNG", "LEISTUNGSOPTIMIERUNG", "SEO KONFIGURATION", "CDN & CACHING", "CI/CD DEPLOYMENT", "QA & CROSS-BROWSER-TESTING"]
      }
    ],
    integration: [
      "Google Analytics", "Google Tag Manager", "Mailchimp Newsletter", "WooCommerce", "Stripe & Klarna Payments", "LiveChat & WhatsApp Support", "Instagram Feed Widget", "Yoast SEO", "WPML Multilingual", "Cloudflare CDN", "GitHub Actions CI/CD", "Sentry Error Monitoring", "ACF REST API", "Newsletter Popup (OptinMonster)", "SMTP (SendGrid)", "Webhooks für Bestellbenachrichtigungen"
    ],
    keyFeatures: [
      "Responsives, mobile-first Design",
      "Maßgeschneidertes WordPress-Theme mit Gutenberg",
      "WooCommerce-Integration",
      "Produktkategorien mit Filterung",
      "„As Seen In“-Galeriemodul",
      "Mehrsprachiger Support via WPML",
      "SEO-Optimierung mit Yoast SEO",
      "Maßgeschneiderte Produktdetailseiten",
      "Geschenkgarten-Produkteinrichtung",
      "Newsletter-Popup mit Mailchimp-Integration",
      "Newsletter-Rabattautomatisierung (10 % Rabatt)",
      "Kostenlose Versandlogik (€35+)",
      "14-tägige Rückgaberichtlinien-Integration",
      "Instagram-Feed-Widget",
      "Ringgrößen- & Kettenlängen-Guides",
      "WhatsApp-Support-Button",
      "Live-Chat-Integration",
      "Styling-Tipps & Blog-Bereich",
      "Sichere Zahlungen via Stripe, Klarna & PayPal",
      "Leistungsoptimierung (Cloudflare CDN, Caching)",
      "Grundlegende Sicherheitseinrichtung (SSL, Anti-Spam)"
    ]
  },
  {
    id: 3,
    text: "ElectroTechNik",
    caseStudyText: "Fallstudie",
    slug: "electro-technik",
    visitText: "Besuchen",
    visitUrl: "https://www.s-s-elektro.at/",
    img: "/assets/images/service/electro-tecknik.jpg",
    video1: "/assets/images/service/mobile-guru1.mp4",
    video2: "/assets/images/service/mobile-guru2.mp4",
    img1Url: "/assets/images/case-study/velra-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: true,
    websiteUrl: "https://velraa.com/",
    projectName: "Velraa",
    runningOn: "2024 – Heute",
    tech: "Replatforming, UI/UX & E-Commerce",
    phases: ["DESIGN", "BERATUNG", "AUFBAU"],
    category: "SCHMUCK & BEKLEIDUNG",
    aboutPara: "Bei ITX-Solutions haben wir mit Velraa zusammengearbeitet, um deren E-Commerce-Erlebnis für handgefertigten Schmuck zu verbessern. Wir begannen mit der Erstellung eines robusten Design-Systems in Figma – komplett mit pixelgenauen Layouts, „As Seen In“-Galerien und dynamischen Produktdetail-Komponenten – und setzten es dann in WordPress mit einem maßgeschneiderten Gutenberg-Theme um. Unsere Implementierung integriert nahtlos kostenlose Versandschwellen, 14-tägige Rückgaben, Newsletter-Anmeldungen und Echtzeit-Bestandsaktualisierungen, während gleichzeitig Performance, SEO und mobile First-Optimierung im Fokus stehen.",
    services: [
      {
        heading: "DESIGN",
        taggs: ["FIGMA DESIGN SYSTEM", "RESPONSIVES PROTOTYPING", "INTERAKTIVE WIREFRAMES", "DESIGN TOKENS", "STYLE GUIDES"]
      },
      {
        heading: "ENTWICKLUNG",
        taggs: ["WORDPRESS THEME ENTWICKLUNG", "GUTENBERG BLOCK ERSTELLUNG", "WOOCOMMERCE EINRICHTUNG", "ACF IMPLEMENTIERUNG", "CUSTOM PLUGIN ENTWICKLUNG", "LEISTUNGSOPTIMIERUNG", "SEO KONFIGURATION", "CDN & CACHING", "CI/CD DEPLOYMENT", "QA & CROSS-BROWSER-TESTING"]
      }
    ],
    integration: [
      "Google Analytics", "Google Tag Manager", "Mailchimp Newsletter", "WooCommerce", "Stripe & Klarna Payments", "LiveChat & WhatsApp Support", "Instagram Feed Widget", "Yoast SEO", "WPML Multilingual", "Cloudflare CDN", "GitHub Actions CI/CD", "Sentry Error Monitoring", "ACF REST API", "Newsletter Popup (OptinMonster)", "SMTP (SendGrid)", "Webhooks für Bestellbenachrichtigungen"
    ],
    keyFeatures: [
      "Responsives, mobile-first Design",
      "Maßgeschneidertes WordPress-Theme mit Gutenberg",
      "WooCommerce-Integration",
      "Produktkategorien mit Filterung",
      "„As Seen In“-Galeriemodul",
      "Mehrsprachiger Support via WPML",
      "SEO-Optimierung mit Yoast SEO",
      "Maßgeschneiderte Produktdetailseiten",
      "Geschenkgarten-Produkteinrichtung",
      "Newsletter-Popup mit Mailchimp-Integration",
      "Newsletter-Rabattautomatisierung (10 % Rabatt)",
      "Kostenlose Versandlogik (€35+)",
      "14-tägige Rückgaberichtlinien-Integration",
      "Instagram-Feed-Widget",
      "Ringgrößen- & Kettenlängen-Guides",
      "WhatsApp-Support-Button",
      "Live-Chat-Integration",
      "Styling-Tipps & Blog-Bereich",
      "Sichere Zahlungen via Stripe, Klarna & PayPal",
      "Leistungsoptimierung (Cloudflare CDN, Caching)",
      "Grundlegende Sicherheitseinrichtung (SSL, Anti-Spam)"
    ]
  }
]
}

// Fallstudien-Daten
// Case Study Data
export const ProjectData = [
  {
    id: 4,
    text: "Velraa",
    caseStudyText: "Fallstudie",
    slug: "velraa",
    visitText: "Besuchen",
    visitUrl: "https://velraa.com/",
    img: "/assets/images/service/banner-img1.jpg",
    video1: "/assets/images/case-study/Velraa-video.mp4",
    video2: "/assets/images/case-study/velra_mobile.mp4",
    img1Url: "/assets/images/case-study/velra-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: true,
    websiteUrl: "https://velraa.com/",
    projectName: "Velraa",
    runningOn: "2024 – Heute",
    tech: "Replatforming, UI/UX & E-Commerce",
    phases: ["DESIGN", "BERATUNG", "ENTWICKLUNG"],
    category: "SCHMUCK & MODE",
    aboutPara:
      "Bei ZMA-Solutions haben wir mit Velraa zusammengearbeitet, um das handgefertigte Schmuck-E-Commerce-Erlebnis zu verbessern. Wir begannen mit der Erstellung eines robusten Designsystems in Figma – inklusive pixelgenauer Layouts, „As Seen In“-Galerien und dynamischer Produktdetail-Komponenten – und setzten es anschließend in WordPress mit einem benutzerdefinierten Gutenberg-Theme um. Unsere Implementierung integriert nahtlos kostenlose Versandgrenzen, 14-Tage-Rückgaberecht, Newsletter-Anmeldungen und Echtzeit-Bestandsaktualisierungen, während gleichzeitig Leistung, SEO und mobile-first Shopping optimiert werden.",
    services: [
      {
        heading: "DESIGN",
        taggs: [
          "FIGMA DESIGN SYSTEM",
          "RESPONSIVES PROTOTYPING",
          "INTERAKTIVE WIREFRAMES",
          "DESIGN-TOKENS",
          "STYLEGUIDES"
        ],
      },
      {
        heading: "ENTWICKLUNG",
        taggs: [
          "WORDPRESS-THEME-ENTWICKLUNG",
          "GUTENBERG-BLOCK-ERSTELLUNG",
          "WOOCOMMERCE-EINRICHTUNG",
          "ACF-IMPLEMENTIERUNG",
          "ENTWICKLUNG BENUTZERDEFINIERTER PLUGINS",
          "LEISTUNGSOPTIMIERUNG",
          "SEO-KONFIGURATION",
          "CDN & CACHING",
          "CI/CD-BEREITSTELLUNG",
          "QA & CROSS-BROWSER-TESTING"
        ],
      },
    ],
    integration: [
      "Google Analytics",
      "Google Tag Manager",
      "Mailchimp Newsletter",
      "WooCommerce",
      "Stripe & Klarna Zahlungen",
      "LiveChat & WhatsApp Support",
      "Instagram Feed Widget",
      "Yoast SEO",
      "WPML Mehrsprachigkeit",
      "Cloudflare CDN",
      "GitHub Actions CI/CD",
      "Sentry Fehlerüberwachung",
      "ACF REST API",
      "Newsletter Popup (OptinMonster)",
      "SMTP (SendGrid)",
      "Webhooks für Bestellbenachrichtigungen",
    ],
    keyFeatures: [
      "Responsives, mobile-first Design",
      "Benutzerdefiniertes WordPress-Theme mit Gutenberg",
      "WooCommerce-Integration",
      "Produktkategorien mit Filteroptionen",
      "„As Seen In“-Galerie-Modul",
      "Mehrsprachige Unterstützung über WPML",
      "SEO-Optimierung mit Yoast SEO",
      "Individuelle Produktdetailseiten",
      "Einrichtung von Geschenkkarten-Produkten",
      "Newsletter-Popup mit Mailchimp-Integration",
      "Automatische Newsletter-Rabatte (10 % Rabatt)",
      "Logik für kostenlosen Versand (€ 35 +)",
      "Integration der 14-Tage-Rückgaberichtlinie",
      "Instagram Feed-Widget",
      "Ringgrößen- & Kettenlängen-Leitfäden",
      "WhatsApp-Support-Button",
      "Live-Chat-Integration",
      "Styling-Tipps & Blog-Bereich",
      "Sichere Zahlungen über Stripe, Klarna & PayPal",
      "Leistungsoptimierung (Cloudflare CDN, Caching)",
      "Grundlegende Sicherheitsmaßnahmen (SSL, Anti-Spam)",
    ],
  },
  {
    id: 5,
    text: "Sclera",
    caseStudyText: "Fallstudie",
    slug: "sclera",
    visitText: "Besuchen",
    visitUrl: "https://www.sclera.at/",
    img: "/assets/images/service/banner-img1.jpg",
    video1: "/assets/images/service/mobile-guru1.mp4",
    video2: "/assets/images/service/mobile-guru2.mp4",
    img1Url: "/assets/images/case-study/sclera-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: false,
    websiteUrl: "https://velraa.com/",
    projectName: "Sclera",
    runningOn: "2024 – Heute",
    tech: "UI/UX Design, E-Commerce Entwicklung",
    phases: ["DESIGN", "BERATUNG", "ENTWICKLUNG"],
    category: ["KONTAKTLINSEN", "KOSMETIK", "AUGENPFLEGE"],
    aboutPara:
      "Wir haben die Sclera-E-Commerce-Plattform für hochwertige farbige, sklerale und Halloween-Kontaktlinsen entworfen und entwickelt. Unsere Arbeit umfasste die Erstellung eines lebendigen UI/UX-Designs und die Optimierung der Website für ein responsives Einkaufserlebnis. Wichtige Ergebnisse beinhalten die Integration eines Virtual Mirror Try-On-Tools für Sofortvorschauen, einen sicheren Checkout über PayPal und Kreditkarten sowie mehrsprachige und mehrwährungsfähige Unterstützung (USD, EUR, GBP) auf der Simplia-E-Shop-Plattform, die in der AWS-Cloud gehostet wird. Das Ergebnis ist ein nahtloses, mobilfreundliches Einkaufserlebnis, das Scleras umfangreiches Produktsortiment hervorhebt.",
    services: [
      {
        heading: "DESIGN",
        taggs: [
          "E-Commerce-Implementierung",
          "Zahlungsintegration",
          "Virtuelles Anprobieren-Feature",
          "SEO & Performance"
        ],
      },
      {
        heading: "ENTWICKLUNG",
        taggs: [
          "WORDPRESS-THEME-ENTWICKLUNG",
          "GUTENBERG-BLOCK-ERSTELLUNG",
          "WOOCOMMERCE-EINRICHTUNG",
          "ACF-IMPLEMENTIERUNG",
          "ENTWICKLUNG BENUTZERDEFINIERTER PLUGINS",
          "LEISTUNGSOPTIMIERUNG",
          "SEO-KONFIGURATION",
          "CDN & CACHING",
          "CI/CD-BEREITSTELLUNG",
          "QA & CROSS-BROWSER-TESTING"
        ],
      },
    ],
    integration: [
      "PayPal",
      "Kreditkarte (Stripe)",
      "FedEx",
      "USPS",
      "AWS Cloud",
      "Virtuelles Spiegel-Tool",
    ],
    keyFeatures: [
      "Responsives Design",
      "Virtuelles Try-On-Tool",
      "Sicherer HTTPS-Checkout",
      "Mehrwährungsunterstützung (USD/EUR/GBP)",
      "Versandoptionen FedEx/USPS",
      "Social-Media-Integration (Facebook/Instagram/TikTok)",
    ],
  },
  {
    id: 6,
    text: "Sclera KI Cybersolutions",
    caseStudyText: "Fallstudie",
    slug: "sclera-ki-cybersolutions",
    visitText: "Besuchen",
    visitUrl: "https://www.sclera-ki-cybersolutions.com/",
    img: "/assets/images/service/banner-img1.jpg",
    video1: "/assets/images/service/mobile-guru1.mp4",
    video2: "/assets/images/service/mobile-guru2.mp4",
    img1Url: "/assets/images/case-study/cabo-verde-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: true,
    websiteUrl: "https://www.sclera-ki-cybersolutions.com/",
    projectName: "Sclera KI Cybersolutions",
    runningOn: "2024 – Heute",
    tech: "KI-gestützte Cybersicherheitsplattform, UI/UX Design & Webentwicklung",
    phases: ["DESIGN", "BERATUNG", "ENTWICKLUNG"],
    category: ["KI-Lösungen", "Cybersicherheit", "Schulung"],
    aboutPara:
      "Sclera-KI Cybersolutions arbeitet an der Schnittstelle von künstlicher Intelligenz und Cybersicherheit. Wir entwickelten eine robuste Website, die die Kernservices von Sclera hervorhebt – KI-gestützte Automatisierung und Analytik, proaktive Penetrationstests und spezialisierte KI-Schulungskurse – alles in einer modernen, DSGVO-konformen Benutzeroberfläche, die das Motto des Unternehmens widerspiegelt: Praktische KI, reale Sicherheit. Das Ergebnis ist ein skalierbares, inhaltsreiches Portal, das Sclera als technologischen Marktführer in den Bereichen Resilienz und Sicherheit positioniert.",
    services: [
      {
        heading: "DESIGN",
        taggs: [
          "Individuelles UI/UX und visuelles Design für eine moderne Oberfläche",
          "Responsives Layout für Desktop und Mobilgeräte",
          "Interaktive Grafiken und dynamische Inhalte"
        ],
      },
      {
        heading: "ENTWICKLUNG",
        taggs: [
          "WordPress-Entwicklung (Elementor-basiert) für flexible Inhaltsverwaltung",
          "Integration von KI-Lösungen und Cybersicherheitsmodulen",
          "Kursanmeldung und benutzerdefinierte Kontaktformulare",
          "Implementierung von Analytik und Mehrsprachenunterstützung"
        ],
      },
    ],
    integration: [
      "Hosting und Support durch ITX-Solution",
      "WordPress CMS-Plattform",
      "Benutzerdefinierte Kontakt- und Anmeldeformulare",
      "Google Analytics Integration",
    ],
    keyFeatures: [
      "KI-gestützte Automatisierung und Analytik",
      "Umfassende Penetrationstest-Dienste",
      "Branchenspezifische KI-Schulungskurse",
      "KI-gestützte Vertragsanalyse für Anwaltskanzleien",
      "Verhaltensanalytische KI-Kamerasysteme",
      "Online-KI-Kurse (Einzelhandel & Automatisierung)",
      "Responsives, mehrsprachiges UI/UX mit DSGVO-Konformität",
    ],
  },
  {
    id: 7,
    text: "Velraa",
    caseStudyText: "Fallstudie",
    slug: "velraa",
    visitText: "Besuchen",
    visitUrl: "https://velraa.com/",
    img: "/assets/images/service/banner-img1.jpg",
    video1: "/assets/images/service/mobile-guru1.mp4",
    video2: "/assets/images/service/mobile-guru2.mp4",
    img1Url: "/assets/images/case-study/it-meister-project.png",
    img2Url: "/assets/images/service/banner-img1.jpg",
    caseText: "Fallstudie",
    isCaseStudy: true,
    websiteUrl: "https://velraa.com/",
    projectName: "Velraa",
    runningOn: "2024 – Heute",
    tech: "Replatforming, UI/UX & E-Commerce",
    phases: ["DESIGN", "BERATUNG", "ENTWICKLUNG"],
    category: "SCHMUCK & MODE",
    aboutPara:
      "Bei ZMA-Solutions haben wir mit Velraa zusammengearbeitet, um das handgefertigte Schmuck-E-Commerce-Erlebnis zu verbessern. Wir begannen mit der Erstellung eines robusten Designsystems in Figma – inklusive pixelgenauer Layouts, „As Seen In“-Galerien und dynamischer Produktdetail-Komponenten – und setzten es anschließend in WordPress mit einem benutzerdefinierten Gutenberg-Theme um. Unsere Implementierung integriert nahtlos kostenlose Versandgrenzen, 14-Tage-Rückgaberecht, Newsletter-Anmeldungen und Echtzeit-Bestandsaktualisierungen, während gleichzeitig Leistung, SEO und mobile-first Shopping optimiert werden.",
    services: [
      {
        heading: "DESIGN",
        taggs: [
          "FIGMA DESIGN SYSTEM",
          "RESPONSIVES PROTOTYPING",
          "INTERAKTIVE WIREFRAMES",
          "DESIGN-TOKENS",
          "STYLEGUIDES"
        ],
      },
      {
        heading: "ENTWICKLUNG",
        taggs: [
          "WORDPRESS-THEME-ENTWICKLUNG",
          "GUTENBERG-BLOCK-ERSTELLUNG",
          "WOOCOMMERCE-EINRICHTUNG",
          "ACF-IMPLEMENTIERUNG",
          "ENTWICKLUNG BENUTZERDEFINIERTER PLUGINS",
          "LEISTUNGSOPTIMIERUNG",
          "SEO-KONFIGURATION",
          "CDN & CACHING",
          "CI/CD-BEREITSTELLUNG",
          "QA & CROSS-BROWSER-TESTING"
        ],
      },
    ],
    integration: [
      "Google Analytics",
      "Google Tag Manager",
      "Mailchimp Newsletter",
      "WooCommerce",
      "Stripe & Klarna Zahlungen",
      "LiveChat & WhatsApp Support",
      "Instagram Feed Widget",
      "Yoast SEO",
      "WPML Mehrsprachigkeit",
      "Cloudflare CDN",
      "GitHub Actions CI/CD",
      "Sentry Fehlerüberwachung",
      "ACF REST API",
      "Newsletter Popup (OptinMonster)",
      "SMTP (SendGrid)",
      "Webhooks für Bestellbenachrichtigungen",
    ],
    keyFeatures: [
      "Responsives, mobile-first Design",
      "Benutzerdefiniertes WordPress-Theme mit Gutenberg",
      "WooCommerce-Integration",
      "Produktkategorien mit Filteroptionen",
      "„As Seen In“-Galerie-Modul",
      "Mehrsprachige Unterstützung über WPML",
      "SEO-Optimierung mit Yoast SEO",
      "Individuelle Produktdetailseiten",
      "Geschenkkarten-Produkte",
      "Newsletter-Popup mit Mailchimp-Integration",
      "Automatische Newsletter-Rabatte (10 % Rabatt)",
      "Kostenloser Versand ab € 35",
      "14-Tage-Rückgaberichtlinie",
      "Instagram Feed-Widget",
      "Ringgrößen- & Kettenlängen-Leitfäden",
      "WhatsApp-Support-Button",
      "Live-Chat-Integration",
      "Styling-Tipps & Blog-Bereich",
      "Sichere Zahlungen über Stripe, Klarna & PayPal",
      "Leistungsoptimierung (Cloudflare CDN, Caching)",
      "Grundlegende Sicherheitsmaßnahmen (SSL, Anti-Spam)",
    ],
  },
];


export const CaseStudyReview1 = [
  {
    description: "ITX-Solutions hat eine sichere und skalierbare IT-Infrastruktur für unsere wachsenden Anforderungen geliefert. Ihr Support war herausragend.",
    profileImg: "/assets/images/case-study/review-1-1.jpg",
    name: "Emily Chen",
    designation: "CEO, FinTech Solutions"
  },
  {
    description: "Ihr Echtzeit-Systemmonitoring half uns, Probleme zu erkennen, bevor sie zu größeren Issues wurden. Zuverlässig und proaktiv.",
    profileImg: "/assets/images/case-study/review-1-2.jpg",
    name: "James O'Connor",
    designation: "Operations Manager, HealthTrack"
  },
  {
    description: "Von der Cloud-Migration bis zum 24/7-Support – ihr Service ist erstklassig. Unsere Ausfallzeiten sind auf nahezu null gesunken.",
    profileImg: "/assets/images/case-study/review-1-3.jpg",
    name: "Carlos Mendes",
    designation: "Mitgründer, EduWave"
  },
  {
    description: "Der technische Support von ITX-Solutions ist schnell, klar und immer hilfreich. Wir fühlen uns nie im Dunkeln gelassen.",
    profileImg: "/assets/images/case-study/review-1-3.jpg",
    name: "Yuki Nakamura",
    designation: "IT-Leiter, RetailConnect"
  },
]

export const CaseStudyReview2 = [
  {
    description: "Sie brachten Struktur und Sicherheit in unsere verstreuten Datensysteme. Jetzt funktioniert einfach alles.",
    profileImg: "/assets/images/case-study/review-2-1.jpg",
    name: "Anastasia Petrova",
    designation: "CTO, Eventrix"
  },
  {
    description: "Sie vereinfachten unseren komplexen IT-Aufbau und machten alles benutzerfreundlich. Eine unglaubliche Transformation.",
    profileImg: "/assets/images/case-study/review-2-2.jpg",
    name: "David Smith",
    designation: "Geschäftsführer, MedGear"
  },
  {
    description: "Ihr Datenmanagement-Ansatz hält uns compliant und gibt uns Sicherheit. Wirklich professioneller Service.",
    profileImg: "/assets/images/case-study/review-2-3.jpg",
    name: "Fatima El Amrani",
    designation: "Digital Project Manager"
  },
  {
    description: "Ihr Monitoring-Dashboard gibt uns Ruhe. Reibungslose Systeme, bessere Leistung.",
    profileImg: "/assets/images/case-study/review-2-4.jpg",
    name: "Jonas Bergström",
    designation: "Mitgründer, WorkNest"
  },
]

// Kontakt-Seite
export const GetInTouchData = {
  lgHeading: "Kontakt aufnehmen",
  smHeading: "Nachricht senden",
  para: "Füllen Sie das untenstehende Formular aus und wir melden uns so schnell wie möglich bei Ihnen. Teilen Sie uns mit, woran Sie interessiert sind, und wir verbinden Sie mit dem richtigen Experten.",
  contactWay: [
    {
      heading: "Rufen Sie uns an",
      descrip: "Haben Sie eine kurze Frage oder benötigen Sie sofortige Hilfe? Rufen Sie uns an und sprechen Sie direkt mit unserem freundlichen Support-Team.",
      icon: "/assets/images/contact/phone.svg",
      text: "+43 677 62376793",
    },
    {
      heading: "Besuchen Sie uns",
      descrip: "Kommen Sie in unserem Büro vorbei für ein persönliches Gespräch – wir heißen Sie gerne willkommen.",
      icon: "/assets/images/contact/location.svg",
      text: "Rokitanskygasse 11/2, 1170 Wien, Austria",
    },
    {
      heading: "Live-Chat",
      descrip: "Brauchen Sie sofort Antworten? Starten Sie einen Live-Chat mit unserem Team und erhalten Sie Echtzeit-Support.",
      icon: "/assets/images/contact/chat.svg",
      text: "Chat starten",
    }
  ]
}

// Datenschutzrichtlinie

export const privacySections = [
  {
    title: "Informationen, die wir sammeln",
    content:
      "Informationen, die Sie uns geben Kontaktdaten (Name, E-Mail, Telefon, Firma), Projektbeschreibungen, Dateien, Zugangsdaten (wenn Sie sie für die Arbeit bereitstellen), Rechnungsdetails und Kommunikation. Informationen, die wir automatisch sammeln Nutzungsdaten (besuchte Seiten, Gerät, IP, Referrer), Cookies und Performance-Logs. Projekt- & KI-Daten Dokumente, Datensätze und Modelleingaben, die Sie zur Entwicklung oder Modelltraining einreichen (behandelt als vertraulich, sofern Sie nicht anders anweisen).",
    borderr: true,
  },
  {
    title: "Wie wir Ihre Informationen verwenden",
    content:
      "Wir nutzen Daten, um Dienstleistungen zu erbringen und zu verbessern, mit Ihnen zu kommunizieren, Zahlungen abzuwickeln, Analysen durchzuführen und unsere Systeme zu sichern. Mit Ihrer ausdrücklichen Autorisierung können wir eingereichte Daten verwenden, um Modelle ausschließlich für Ihr Projekt zu erstellen oder zu trainieren.",
    borderr: true,
  },
  {
    title: "Informationsweitergabe & Dritte",
    content:
      "Wir geben Daten nur weiter an: vertrauenswürdige Dienstleister (Hosting, Analytics, Zahlungen), Subunternehmer, die an Ihren Projekten arbeiten, und wenn gesetzlich erforderlich. Alle Dritten handeln nach unseren Anweisungen und sind vertraglich zum Schutz Ihrer Daten verpflichtet. Wir verkaufen keine persönlichen Daten.",
    borderr: true,
  },
  {
    title: "Cookies & Tracking",
    content:
      "Wir verwenden Cookies für essentielle Website-Funktionen, Analysen und (mit Einwilligung) Marketing. Sie können Cookie-Einstellungen in Ihrem Browser verwalten.",
    borderr: true,
  },
  {
    title: "Datensicherheit",
    content:
      "Wir verwenden branchenübliche Sicherheitsvorkehrungen – TLS während der Übertragung, rollenbasierter Zugriff, Backups und regelmäßige Sicherheitsüberprüfungen. Obwohl wir starke Maßnahmen ergreifen, ist kein System unfehlbar; benachrichtigen Sie uns bitte sofort, wenn Sie einen Verstoß vermuten.",
    borderr: true,
  },
  {
    title: "Datenaufbewahrung",
    content:
      "Wir bewahren Projekt- und Kundendaten so lange auf, wie es zur Erbringung der Dienstleistungen und zur Erfüllung gesetzlicher/buchhalterischer Anforderungen notwendig ist. Sie können Löschung beantragen, vorbehaltlich gesetzlicher oder vertraglicher Aufbewahrungspflichten.",
    borderr: true,
  },
  {
    title: "Ihre Rechte",
    content:
      "Abhängig von Ihrem Standort können Sie auf Ihre persönlichen Daten zugreifen, diese berichtigen, exportieren oder löschen lassen. Sie können der Verarbeitung auch widersprechen oder Ihre Einwilligung für Marketing jederzeit widerrufen. Kontaktieren Sie uns unten, um diese Rechte auszuüben.",
    borderr: true,
  },
  {
    title: "KI & Modellnutzung (wichtig)",
    content:
      "Kundendaten, die für Modelltraining verwendet werden, bleiben Ihr Eigentum. Wir werden Ihre Trainingsdaten nur mit ausdrücklicher schriftlicher Erlaubnis wiederverwenden oder verallgemeinern. KI-Ausgaben sollten vor der Verwendung in kritischen Anwendungen validiert werden.",
    borderr: true,
  },
  {
    title: "Internationale Datenübermittlungen",
    content:
      "Wir operieren und speichern Daten global. Wenn Daten Grenzen überschreiten, wenden wir je nach Rechtserfordernis angemessene Schutzmaßnahmen an (z.B. vertragliche Schutzklauseln).",
    borderr: true,
  },
  {
    title: "Kinder",
    content:
      "Unsere Dienstleistungen sind nicht für Kinder unter 16 Jahren bestimmt. Wenn Sie glauben, dass wir Daten eines Minderjährigen gesammelt haben, kontaktieren Sie uns und wir werden diese umgehend entfernen.",
    borderr: true,
  },
  {
    title: "Änderungen dieser Richtlinie",
    content:
      "Wir können diese Richtlinie gelegentlich aktualisieren. Wir veröffentlichen die überarbeitete Version auf unserer Website mit einem neuen Effective Date.",
    borderr: true,
  },
  {
    title: "Kontaktieren Sie uns",
    content:
      "Wenn Sie Fragen, Anfragen oder Bedenken haben, kontaktieren Sie: ITX E-Mail: office@itx-solutions.com",
    borderr: false,
  },
];

export const ImPrintsData = {
  topHeading: "Impressum – Rechtliche Informationen",
  description: "Dieses Impressum enthält essentielle rechtliche Details über ITX, einschließlich Eigentümer, Kontakt- und Geschäftsinformationen gemäß anwendbarer Gesetze. Durch den Besuch unserer Website oder die Nutzung unserer Dienstleistungen (Webentwicklung, KI-Entwicklung, Grafikdesign und IT-Services) bestätigen Sie die unten bereitgestellten Informationen.",

}