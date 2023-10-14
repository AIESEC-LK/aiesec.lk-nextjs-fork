import Nav from "@components/Nav";
import HeroSection from "@components/partner-portal/HeroSection";
import PartnersListSection from "@components/partner-portal/PartnersListSection";
import data from "@pages/partner-portal/data.json";
import Footer from "@components/Footer";
import PortalBG from "@components/partner-portal/PortalBG";

const PartnerPortalPage = () => {
  return (
    <>
      <PortalBG/>
      <Nav/>
      <HeroSection/>
      <PartnersListSection partners={data.jsonData}/>
      <Footer />
    </>
  );
}

export default PartnerPortalPage;