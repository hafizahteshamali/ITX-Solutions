import React from "react";
import Header from "../../../navigation/Header";
import MapEmbed from "../../../components/MapEmbed";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="w-full bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col justify-center lg:justify-end items-start px-5">
          <Header />

          <h1 className="text-2xl mt-[150px] mb-[50px] lg:text-7xl text-center w-full flex justify-center items-center mx-auto font-[600] text-[#03278D]">
            Kontakt
          </h1>

          <div className="w-full flex flex-col items-center gap-7 mb-[100px]">
            <div className="w-full h-full flex flex-col justify-center gap-10 items-center">
              <div className="w-full flex flex-col lg:w-[60%] gap-3">
                <div className="flex flex-col justify-center items-center gap-2.5 w-full">
                  <p className="text-[#03278D] text-center text-xl leading-8">
                    Haben Sie Fragen zu unseren Dienstleistung oder möchten Sie ein unverbindliches Beratungsgespräch vereinbaren?
                    Unser Team von ITX-Solution steht Ihnen gerne zur Verfügung.
                  </p>

                  <p className="text-[#03278D] text-center text-xl leading-8 my-5">
                  Sie erreichen uns telefonisch oder per E-Mail – wir melden uns so schnell wie möglich bei Ihnen zurück.
                  </p>
                </div>

                <div className="w-full flex justify-center items-center">
                  <p className="text-[#03278D] text-xl text-center">
                    Wir freuen uns auf Ihre Nachricht und darauf, gemeinsam mit Ihnen die passende IT-Lösung für Ihr Unternehmen zu finden.
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex flex-col justify-center items-center w-full text-sm">
                    <div className="flex justify-center items-center gap-3 w-full py-2">
                    <FaPhone className="text-[#03278D] text-2xl" />
                      <span className="text-[#03278D] lg:text-2xl text-sm">Telefon: +43 677 62376793</span>
                    </div>
                    
                    <div className="flex justify-center items-center gap-3 w-full py-2">
                    <MdOutlineMailOutline className="text-[#03278D] text-2xl" />
                      <span className="text-[#03278D] lg:text-2xl text-sm">E-Mail: office@itx-solutions.com</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] container mx-auto mb-[50px] rounded-xl overflow-hidden">
          <MapEmbed />
        </div>
      </div>
    </>
  );
};

export default Banner;