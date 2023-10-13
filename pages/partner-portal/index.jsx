import Nav from "@components/Nav";
import HeroSection from "@components/partner-portal/HeroSection";
import PartnersListSection from "@components/partner-portal/PartnersListSection";
import {jsonData} from "@pages/partner-portal/data.json";
import CustomFooter from "@components/partner-portal/CustomFooter";
import Footer from "@components/Footer";

const PartnerPortalPage = () => {

  return (
    <>
      <Nav/>
      <HeroSection/>
      <PartnersListSection partners={jsonData}/>
      <Footer />
    </>
  );
}

export default PartnerPortalPage;