"use client";

import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Tabs2 = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default first tab active

  const tabContent = [
    {
      title: "Echtzeit-Systemüberwachung",
      description: "Überwachen Sie kontinuierlich Ihre Server und Anwendungen mit sofortigen Benachrichtigungen, um Störungen zu minimieren und Spitzenleistung zu erhalten.",
      hasReadMore: true,
    },
    {
      title: "Sichere Datenverwaltung",
      description: "Schützen Sie Ihre Geschäftsdaten mit fortschrittlicher Verschlüsselung, automatisierten Backups und zuverlässigen Wiederherstellungslösungen, die auf Compliance zugeschnitten sind.",
      hasReadMore: true,
    },
    {
      title: "24/7 Technischer Support",
      description: "Unser Expertenteam ist rund um die Uhr verfügbar, um Probleme zu beheben, Issues zu lösen und sicherzustellen, dass Ihre IT-Infrastruktur betriebsbereit bleibt.",
      hasReadMore: true,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-[50px] w-full lg:w-[80%]">
      <div className="w-full">
        {tabContent.map((tab, index) => (
          <div
            key={index}
            className={`
              p-6 cursor-pointer transition-all duration-300 my-3
              ${activeIndex === index ? 'opacity-100 border-l-4 border-[#03278D]' : 'opacity-50'}
            `}
            onClick={() => setActiveIndex(index)}
          >
            <h2 className="text-xl font-bold text-[#03278D] mb-2">{tab.title}</h2>
            <p className="text-[#03278D99] my-4 text-sm">{tab.description}</p>
            {activeIndex === index && tab.hasReadMore && (
              <a href="#" className="flex items-center text-[#03278D] text-sm font-semibold hover:underline">
                Read More
                <FaChevronRight className="ml-1 h-4 w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs2