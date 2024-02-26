// Global Volunteer
import React from "react";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import GVData from "@pages/products/global-volunteer/data.json";

import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from "@components/products/VideoTestimonials";
import Projects from "@components/products/projects";
import ProjectDestinations from "@components/products/projects2";
import Whyvolunteer from "@components/products/whyvolunteer";
import Signupbanner from "@components/products/signupbanner";
import Footer from "@components/Footer";
import ContactFrom from "@components/form";
import Intro from "@components/products/Intro";
import SplashScreen from "@components/SplashScreen";
import Process from "@components/products/Process";
import FnQ from "@components/FnQ";

function Volunteer() {
  const volunteerColor = 'global-volunteer';
  const pathname = usePathname();
  //change the path here
  const isHome = pathname === "/products/global-volunteer";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);


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
      {/* Product Intro */}
      <div>
        {
          GVData.map((data) => (
            data.basicdetails && data.basicdetails.map((pdata) => (
              <Intro
                key={pdata.id}
                title={pdata.title}
                color={pdata.color}
                logo={pdata.logo}
                description={pdata.content}
                duration={pdata.duration}
                organization={pdata.organization}
                url={pdata.url}
              />
            ))
          ))}
      </div>
      {
          GVData.map((data) => (
            data.basicdetails && data.basicdetails.map((pdata) => (
              <VideoTestimonials
                key={pdata.id}
                color={pdata.color}
              />
            ))
          ))}
      {/* Our Projects */}
      <h2 className={`text-${volunteerColor} flex justify-center text-3xl font-bold pb-14 p-8`}>Our Projects</h2>
      <div className="flex flex-wrap justify-center">
        {
          GVData.map((info) => (
            info.ourprojects && info.ourprojects.map((project) => (
              <Projects
                key={project.id}
                title={project.title}
                img={project.path}
              />
            ))
          ))}
        
      </div>
      {/* Our Destinations */}
      <h2 className={`text-${volunteerColor} flex justify-center text-3xl font-bold pb-14 p-8`}>Our Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          GVData.map((info) => (
            info.ourdestination && info.ourdestination.map((destination) => (
              <ProjectDestinations
                key={destination.id}
                countryname={destination.countryname}
                projecttype={destination.projecttype}
                path={destination.path}
              />
            ))
          ))}
      </div>
      <br />
      <Whyvolunteer />
      <h2 className={`text-${volunteerColor} flex justify-center text-3xl font-bold pb-14 p-8`}>Process</h2>
      <Process />
      {/* Sign Up Banner */}
      <div>
      {
          GVData.map((info) => (
            info.signupbanner && info.signupbanner.map((banner) => (
              <Signupbanner
                key={banner.id}
                content={banner.content}
                img={banner.path}
                url={banner.url}
                
              />
            ))
          ))}
      </div>
      <FnQ/>
      <ContactFrom />
      <Footer />
      </div>
    )}










      
    </>
  );
}

export default Volunteer;
