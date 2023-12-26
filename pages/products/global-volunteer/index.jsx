import React from 'react'
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from '@components/products/VideoTestimonials';
import Layout from '@components/products/Layout';
import Projectsigv from '@components/products/projects';

function Volunteer() {
  return (
    <>
      <HtmlHead title={"Global Volunteer - AIESEC in Sri Lanka"} description={"Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."}/>
      <Layout textColor="" bgColor="global-volunteer">
      <Nav/>
      {/* <HomeVideo/>
      <Counter/> */}
      <br />
      <br />
      <br />
      <br />
      <h1>Description</h1>
      <VideoTestimonials/>
      <Projectsigv/>
      <br/>
      <br/>
      <h1>This is Page 1</h1>
    </Layout>



    </>
  )
}

export default Volunteer