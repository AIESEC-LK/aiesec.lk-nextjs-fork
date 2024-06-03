import Nav from "@components/Nav";
import HeroSection from "@components/partner-portal/HeroSection";
import PartnersListSection from "@components/partner-portal/PartnersListSection";
import data from "@pages/partner-portal/data.json";
import Footer from "@components/Footer";
import PortalBG from "@components/partner-portal/PortalBG";
import HtmlHead from "@components/partner-portal/HtmlHead";


const PartnerPortalPage = () => {
  return (
    <>
      <HtmlHead title={"Partner Portal - AIESEC in Sri Lanka"} description={"Explore our partners and opportunities."}/>
      <PortalBG/>
      <Nav/>
      <HeroSection/>
      <PartnersListSection partners={data.jsonData}/>


      <Footer/>
    </>
  );
}

export default PartnerPortalPage;