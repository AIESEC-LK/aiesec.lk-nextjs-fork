import React from 'react'
import Nav from '../../../components/Nav'
import HtmlHead from '../../../components/partner-portal/HtmlHead'
import Footer from '@components/Footer'
import TwineryHomeVideo from '@components/partner-portal/Twinery/TwineryHomeVideo'
import PartnerIntro from '@components/partner-portal/Twinery/PartnerIntro'
import AboutInnobee from '@components/partner-portal/Twinery/AboutInnobee'
import Oppoprtunities from '@components/partner-portal/Twinery/Opportunities'
import FooterImages from '@components/partner-portal/Twinery/FooterImages'
import WhatisTwinary from '@components/partner-portal/Twinery/whatistwinary'

function index() {
  return (
    <div>
      <HtmlHead title={"Twinery Partner Portal - AIESEC in Sri Lanka"} description={"Explore Twinery partners and opportunities."}/>
      <Nav/>
      <TwineryHomeVideo/>
      <WhatisTwinary/>
      <PartnerIntro/>
      <AboutInnobee/>
      <Oppoprtunities/>
      <br /><br />
      {/* <FooterImages/> */}
      <Footer/>
    </div>
  ) 
}

export default index