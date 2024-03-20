import React from 'react'
import Nav from '../../../components/Nav'
import HtmlHead from '../../../components/partner-portal/HtmlHead'
import Footer from '@components/Footer'
import TwineryHomeVideo from '@components/partner-portal/Twinery/TwineryHomeVideo'
import PartnerIntro from '@components/partner-portal/Twinery/PartnerIntro'
import AboutInnobee from '@components/partner-portal/Twinery/AboutInnobee'

function index() {
  return (
    <div>
      <HtmlHead title={"Twinery Partner Portal - AIESEC in Sri Lanka"} description={"Explore Twinery partners and opportunities."}/>
      <Nav/>
      <TwineryHomeVideo/>
      <br />
      <PartnerIntro/>
      <AboutInnobee/>
      <Footer/>
    </div>
  )
}

export default index