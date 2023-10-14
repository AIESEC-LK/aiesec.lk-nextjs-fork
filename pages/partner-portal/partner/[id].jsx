import {useRouter} from "next/dist/client/router";
import "@styles/globals.css";
import data from "@pages/partner-portal/data.json";
import PartnerInfoSection from "@components/partner-portal/PartnerInfoSection";
import PartnerOpportunitiesSection from "@components/partner-portal/PartnerOpportunitiesSection";
import Footer from "@components/Footer";
import PartnerHero from "@components/partner-portal/PartnerHero";
import PostalHeader from "@components/partner-portal/PostalHeader";
import {useEffect, useState} from "react";
import Nav from "@components/Nav";
import Head from 'next/head';
import FullscreenLoadingSpinner from "@components/partner-portal/FullscreenLoadingSpinner";


const PartnerPage = () => {
  const router = useRouter();
  const {id} = router.query;

  const [partnerData, setPartnerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const partner = data.jsonData.find((partner) => partner.id === parseInt(id));
      setPartnerData(partner);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  return (
    isLoading ? <>
      <Head>
        <title>{"Loading"}</title>
      </Head>
      <FullscreenLoadingSpinner/>
    </> : <>
      <Head>
        <title>{`${partnerData?.name}'s Partner Portal`}</title>
      </Head>
      <Nav/>
      <PartnerHero/>
      {/*<PostalHeader/>*/}
      <PartnerInfoSection partnerData={partnerData}/>
      <PartnerOpportunitiesSection opportunities={partnerData?.opportunities}/>
      <Footer/></>
  )
}

export default PartnerPage;