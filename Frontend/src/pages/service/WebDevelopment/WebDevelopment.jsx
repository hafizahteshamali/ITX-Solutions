import React from "react";
import Banner from "./elements/Banner";
import {
  clientsName,
  clientsName1,
  CustomGlobalData,
  DesignGlobalData,
  ServiceBannerData,
  theriData,
  WebReviews1,
  WebReviews2,
} from "../../../assets/ConstantData";
import CustomGlobal from "./elements/CustomGlobal";
import DesignSection from "./elements/DesignSection";
import Reviews from "../../../components/Reviews";
import DiscoverBanner from "../../../components/DiscoverBanner";

const WebDevelopment = () => {
  return (
    <>
      <Banner ServiceBannerData={ServiceBannerData} />
      <CustomGlobal
        clientsName={clientsName1}
        CustomGlobalData={CustomGlobalData}
      />
      <DesignSection
        DesignGlobalData={DesignGlobalData}
        theriData={theriData}
      />
      <Reviews Reviews1={WebReviews1} Reviews2={WebReviews2} bgColor="#cbe1ff" />
      <DiscoverBanner
        image="/assets/images/service/bottom-banner.jpg"
        className="bg-center"
        spanClass="text-[#CBE1FF]"
        btnClass="border-2 border-[#CBE1FF]"
        iconClass="text-[#CBE1FF]"
        text1="Entwicklung sollte nicht kompliziert sein."
        text2="Wir vereinfachen jeden Schritt."
      />
    </>
  );
};

export default WebDevelopment;