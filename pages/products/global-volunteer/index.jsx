import React from "react";
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from "@components/products/volunteer/VideoTestimonials";
import Projectsigv from "@components/products/volunteer/projects";
import Whyvolunteer from "@components/products/volunteer/whyvolunteer";
import IgvSignupbanner from "@components/products/volunteer/signupbanner";
// import { Footer } from 'flowbite-react';
import Footer from "@components/Footer";
import Layout from "@components/products/Layout";

function Volunteer() {
  return (
    <>
      <HtmlHead
        title={"Global Volunteer - AIESEC in Sri Lanka"}
        description={
          "Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."
        }
      />
      <Nav />
      <div bgColor="global-volunteer" textColor="white">
        {/* Use bgColor everywhere you need global volunteer colour */}

        <HomeVideo />
        {/*<Counter/> */}
        <br />
        <br />
        <VideoTestimonials />
        <h1>kkkbk</h1>
      </div>

      <Projectsigv />

      <Whyvolunteer />
      <br />
      <IgvSignupbanner />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Volunteer;
