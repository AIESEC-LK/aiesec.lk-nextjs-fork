import React from 'react'
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from '@components/products/VideoTestimonials';
import Layout from '@components/products/Layout';
import Projectsigv from '@components/products/projects';
import Projectsigv2 from '@components/products/projects2';
import Whyvolunteer from '@components/products/whyvolunteer';
import IgvSignupbanner from '@components/products/signupbanner';
import TheProcess from '@components/products/theprocess';




function Volunteer() {
  return (
    <>
      <HtmlHead title={"Global Volunteer - AIESEC in Sri Lanka"} description={"Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."}/>
      <Nav/>
      <Layout bgColor="global-volunteer" textColor="white">
      {/* Use bgColor everywhere you need global volunteer colour */}
      
      <HomeVideo/>
      {/*<Counter/> */}
      <br />
      <br />
      <VideoTestimonials/>
      </Layout>
      <Layout textColor="global-volunteer">
      <Projectsigv/>
      <Projectsigv2/>
      <TheProcess/>
      <aboutaiesec/>

      <Whyvolunteer/><br/>
      <IgvSignupbanner/><br/>
      <br/>
      <br/>
      <h1>This is Page 1</h1>
      {/* <ProcessLayout/> */}
      {/* <DestinationsLayout/> */}
    </Layout>



  
    </>
  )
}

export default Volunteer