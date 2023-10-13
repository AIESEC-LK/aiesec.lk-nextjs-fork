import MultiText from "@components/Micro_components/Multitext";
import React, { useEffect, useRef } from "react";
import Video from "next-video";
import Nav from "@components/Nav";


function PartnerVideo() {

  return (
    
    <section id="home" className="relative w-screen overflow-hidden">
        <Nav/>
      <div className=" w-screen z-0 sm:mt-0 mt-20">
        <video src={require("@public/Unilever.mp4")} muted autoPlay loop/>
      </div>
      <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 md:bottom-18 md:left-18 xl:bottom-72 xl:left-32 z-20 ">
        
      </div>
      <div className=" absolute bg-gradient-to-t from-aiesec-blue to-transparent h-2/3 z-10 w-screen bottom-0"></div>
    </section>
  );
}

export default PartnerVideo;
