import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const ProcessTabs = ({ tabs }) => {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTabs, setActiveTabs] = useState([]); // multiple active tabs
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  // Auto-open logic when section is in view
  useEffect(() => {
    if (!isInView) return;

    tabs.forEach((_, index) => {
      setTimeout(() => {
        setOpenTabs((prev) => [...new Set([...prev, index])]);
        setActiveTabs((prev) => [...new Set([...prev, index])]); // keep active
      }, index * 1500);
    });
  }, [isInView, tabs]);

  const handleTabClick = (index) => {
    // if already active, don't remove — keep it active
    setOpenTabs((prev) => [...new Set([...prev, index])]);
    setActiveTabs((prev) => [...new Set([...prev, index])]);
  };

  return (
    <div ref={sectionRef} className="w-full">
      <div className="w-full mx-auto px-4">

        {/* Progress indicators */}
        <div className="flex justify-between mb-8">
          {tabs.map((_, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-1 transition-all duration-500 ${
                  openTabs.includes(index) ? "bg-[#1C3C98]" : "bg-[#9EB3C8]"
                } ${index < tabs.length - 1 ? "mr-4" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="cursor-pointer w-full sm:w-[80%] lg:flex-1 p-4 rounded-md transition-all duration-500 ease-in-out"
              onClick={() => handleTabClick(index)}
            >
              {/* Tab number */}
              <div
                className={`text-xl font-bold mb-2 text-left lg:text-left ${
                  activeTabs.includes(index)
                    ? "text-[#1C3C98]"
                    : "text-[#9EB3C8]"
                }`}
              >
                {tab.number}
              </div>

              {/* Tab heading */}
              <h3
                className={`text-[16px] font-semibold mb-4 text-left lg:text-left ${
                  activeTabs.includes(index)
                    ? "text-[#1C3C98]"
                    : "text-[#9EB3C8]"
                } transition-colors`}
              >
                {tab.title}
              </h3>

              {/* Description */}
              {openTabs.includes(index) && (
                <div className="mt-4 p-4 rounded-lg shadow-sm text-left lg:text-left opacity-100 transition-opacity duration-700 ease-in-out">
                  <p className="text-[#1C3C9899] text-sm leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTabs;
