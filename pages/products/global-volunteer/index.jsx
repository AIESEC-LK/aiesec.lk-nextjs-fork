import React from "react";
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from "@components/products/volunteer/VideoTestimonials";
import Layout from "@components/products/Layout";
import Projects from "@components/products/volunteer/projects";
import ProjectDestinations from "@components/products/projects2";
import Whyvolunteer from "@components/products/volunteer/whyvolunteer";
import Signupbanner from "@components/products/volunteer/signupbanner";

// import { Footer } from 'flowbite-react';
import Footer from "@components/Footer";
import ContactFrom from "@components/form";

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
      <HomeVideo />
      {/* Counter */}
      {/* Signup space   */}
      {/* why sighup space */}
      <VideoTestimonials />
      <Projects />
      <ProjectDestinations />
      <Whyvolunteer />
      {/* the process */}
      {/* testimonial */}
      <Signupbanner />
      {/* FaQ */}
      <ContactFrom />
      <Footer />
    </>
  );
}

export default Volunteer;
