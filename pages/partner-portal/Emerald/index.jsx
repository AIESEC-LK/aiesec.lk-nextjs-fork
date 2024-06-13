import React, { useState } from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import FullscreenLoadingSpinner from "@components/partner-portal/FullscreenLoadingSpinner";
import HtmlHead from "@components/partner-portal/HtmlHead";
import partnerData from "@pages/partner-portal/Emerald/data.json";
import PartnerHero from "@components/partner-portal/Emerald/PartnerHero";
import PartnerInfoSection from "@components/partner-portal/Emerald/PartnerInfoSection";
import PartnerOpportunitiesSection from "@components/partner-portal/PartnerOpportunitiesSection";
import OppCard from "@components/partner-portal/Emerald/OppCard";

function Emerald() {
  const [isLoading, setIsLoading] = useState(true);
  const [partnerData, setPartnerData] = useState(false);
  return (
    //   return isLoading ? (
    //     <>
    //       <HtmlHead title={"Loading"} description={"Partner details page"} />
    //       <FullscreenLoadingSpinner />
    //     </>
    //   ) : (
    <>
      <HtmlHead title={`Emerald - Partner Portal`} description={""} />
      {/* <PartnerHero /> */}
      <PartnerInfoSection />
      {/* <PartnerOpportunitiesSection opportunities={partnerData?.opportunities} /> */}
      <OppCard />
      <Footer />
    </>
  );
}

export default Emerald;
