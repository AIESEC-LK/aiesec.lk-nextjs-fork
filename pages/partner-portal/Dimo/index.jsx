import React, { useState } from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import FullscreenLoadingSpinner from "@components/partner-portal/FullscreenLoadingSpinner";
import HtmlHead from "@components/partner-portal/HtmlHead";
import partnerData from "@pages/partner-portal/Dimo/data.json";
import PartnerHero from "@components/partner-portal/Dimo/PartnerHero";
import PartnerInfoSection from "@components/partner-portal/Dimo/PartnerInfoSection";
import PartnerOpportunitiesSection from "@components/partner-portal/PartnerOpportunitiesSection";
import OppCard from "@components/partner-portal/Dimo/OppCard";

function Dimo() {
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
      <HtmlHead title={`Dimo - Partner Portal`} description={""} />

      <PartnerInfoSection />

      <OppCard />
      <Footer />
    </>
  );
}

export default Dimo;
