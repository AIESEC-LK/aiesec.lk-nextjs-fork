import Nav from "@components/Nav";
import HeroSection from "@components/partner-portal/HeroSection";
import PartnersListSection from "@components/partner-portal/PartnersListSection";
import {jsonData} from "@pages/partner-portal/data.json";

const PartnerPortalPage = () => {

  return (
    <>
      <Nav/>
      <HeroSection/>
      <PartnersListSection partners={jsonData}/>
    </>
  );
}

export default PartnerPortalPage;