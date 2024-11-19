import React, { useState } from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import FullscreenLoadingSpinner from "@components/partner-portal/FullscreenLoadingSpinner";
import HtmlHead from "@components/partner-portal/HtmlHead";
import partnerData from "@pages/partner-portal/Unilever/data.json";
import PartnerHeroVideo from "@components/partner-portal/Unilever/PartnerHeroVideo";
import PartnerInfoSection from "@components/partner-portal/Unilever/PartnerInfoSection";
import PartnerOpportunitiesSection from "@components/partner-portal/PartnerOpportunitiesSection";
import OppCard from "@components/partner-portal/Unilever/OppCard";
import data from "@pages/partner-portal/data.json";


function Unilever() {

  const [partnerData, setPartnerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    //   return isLoading ? (
    //     <>
    //       <HtmlHead title={"Loading"} description={"Partner details page"} />
    //       <FullscreenLoadingSpinner />
    //     </>
    //   ) : (
    <>
    <Nav />
      <HtmlHead title={`Unilever - Partner Portal`} description={""} />
      <PartnerHeroVideo />
      <PartnerInfoSection />
      {/* <PartnerOpportunitiesSection opportunities={partnerData?.opportunities} /> */}
      <OppCard />
      <Footer />
    </>
  );
}

export default Unilever;
