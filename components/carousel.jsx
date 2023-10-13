"use client";
import React from "react";
import Image from "next/image";
import Carousel from "./Micro_components/EPcarousel";
import CarouselMobile from "./Micro_components/EPCarouselMobile";
import logo from "@public/aiesecwhite.png";

function EPCarousel() {
  return (
    <section className=" relative w-full mt-24">
      <h2 className=" text-center text-3xl text-aiesec-blue font-semibold pb-10 px-3">
        What they're talking about AIESEC
      </h2>
      <div className="lg:block hidden">
        <Carousel />
      </div> 
      <div className="lg:hidden block mt-10 mb-0">
        <CarouselMobile />
      </div>
      
    </section>
  );
}

export default EPCarousel;
