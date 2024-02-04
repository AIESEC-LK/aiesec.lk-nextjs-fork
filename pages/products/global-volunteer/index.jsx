import React from "react";
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from "@components/products/VideoTestimonials";
import Layout from "@components/products/Layout";
import Projects from "@components/products/projects";
import ProjectDestinations from "@components/products/projects2";
import Whyvolunteer from "@components/products/whyvolunteer";
import Signupbanner from "@components/products/signupbanner";
import GVData from "@pages/products/global-volunteer/data.json";
import Footer from "@components/Footer";
import ContactFrom from "@components/form";
import Intro from "@components/products/Intro";
import SplashScreen from "@components/SplashScreen";


import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Process from "@components/products/Process";

function Volunteer() {
  const pathname = usePathname();
  //change the path here
  const isHome = pathname === "/products/global-volunteer";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  //ProjectData
  const projectDetails = GVData.map((info) => (
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
      {isLoading && isHome ? (
      <SplashScreen finishLoading={() => setIsLoading(false)}/>
    ) : (
      <div className=" overflow-hidden">
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
      <Process />
      <Signupbanner />
      <ContactFrom />
      <Footer />
      </div>
    )}










      
    </>
  );
}

export default Volunteer;
