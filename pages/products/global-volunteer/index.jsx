import React from 'react'
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from '@components/products/VideoTestimonials';

function Volunteer() {
  return (
    <>
      <HtmlHead title={"Global Volunteer - AIESEC in Sri Lanka"} description={"Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."}/>
      <Nav/>
      {/* <HomeVideo/>
      <Counter/> */}
      <br />
      <br />
      <br />
      <br />
      <h1>Description</h1>
      <VideoTestimonials/>



    </>
  )
}

export default Volunteer