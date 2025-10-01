import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.2063386468403!2d16.326193576585037!3d48.2219012452867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d087601a55555%3A0x5f4c1f39c038d1d4!2sRokitanskygasse%2011%2FTop%202%2C%201170%20Wien%2C%20Austria!5e0!3m2!1sen!2s!4v1759321463379!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ITX Solution Location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
