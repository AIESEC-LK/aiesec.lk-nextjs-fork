import React from "react";
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from "@components/products/volunteer/VideoTestimonials";
import Layout from "@components/products/Layout";
import Projects from "@components/products/volunteer/projects";
import ProjectDestinations from "@components/products/volunteer/projects2";
import Whyvolunteer from "@components/products/volunteer/whyvolunteer";
import Signupbanner from "@components/products/volunteer/signupbanner";
import ProjectsData from "@pages/products/global-volunteer/data.json";
import Footer from "@components/Footer";
import ContactFrom from "@components/form";
import Intro from "@components/products/volunteer/Intro";

function Volunteer() {
  //ProjectData
  const projectDetails = ProjectsData.map((info) => (
    info.ourprojects && info.ourprojects.map((project) => (
      <Projects
        key={project.id}
        title={project.title}
        img={project.path}
      />
    ))
  ));

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
      <Counter />
      <Intro />
      <VideoTestimonials />
      <h2 className="text-global-volunteer flex justify-center text-3xl font-bold pb-14 p-8">Our Projects</h2>
      <div className="flex flex-wrap justify-center">
      {projectDetails}
      </div>
      <ProjectDestinations />
      <Whyvolunteer />
      <Signupbanner />
      <ContactFrom />
      <Footer />
    </>
  );
}

export default Volunteer;
