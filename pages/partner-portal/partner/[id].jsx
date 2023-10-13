import {useRouter} from "next/dist/client/router";
import "@styles/globals.css";
import {jsonData} from "@pages/partner-portal/data.json";
import PartnerInfoSection from "@components/partner-portal/PartnerInfoSection";
import PartnerOpportunitiesSection from "@components/partner-portal/PartnerOpportunitiesSection";
import CustomFooter from "@components/partner-portal/CustomFooter";
import Footer from "@components/Footer";
import PartnerHero from "@components/PartnerHero";
import PostalHeader from "@components/partner-portal/PostalHeader";

const PartnerPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const partnerData = jsonData.find(partner => partner.id === parseInt(id));
  console.log(partnerData)

  return (
    <>
    <PartnerHero/>
    <PostalHeader/>
      <PartnerInfoSection partnerData={partnerData}/>
      <PartnerOpportunitiesSection opportunities={partnerData?.opportunities}/>
      <Footer/>
    </>
  )
}

export default PartnerPage;