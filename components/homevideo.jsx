'use client'

import MultiText from "@components/Micro_components/Multitext";
import VideoPlayer from "./Micro_components/videoplayer";
import React, { useEffect, useRef } from "react";


function HomeVideo() {
  return (
    <section className=" relative">
      <div className=" bg-gradient-to-t from-general-blue transparent to-transparent z-10">
        <VideoPlayer/>
      </div>
      <div className=" absolute bottom-5 left-5 sm:bottom-10 sm:left-10 md:bottom-18 md:left-18 xl:bottom-72 xl:left-32 ">
        <MultiText />
      </div>
    </section>
  );
}

export default HomeVideo;
