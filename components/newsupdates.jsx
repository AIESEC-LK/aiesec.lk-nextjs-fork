import Image from "next/image";
import React, { useState } from "react";
import LargeImg from "@public/newsimg1.png";
import img1 from "@public/newsimg2.png";
import img2 from "@public/newsimg3.png";
import img3 from "@public/newsimg4.png";
import img4 from "@public/newsimg5.png";
import NewsSlider from "./Micro_components/newsslider";

const NewsUpdates = () => {
  const news = [
    {
      image: img1,
      Title: "Lorem ipsum dolor sit amet 1",
      Desp: "1 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus.",
    },
    {
      image: img2,
      Title: "Lorem ipsum dolor sit amet 2",
      Desp: "2 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus.",
    },
    {
      image: img3,
      Title: "Lorem ipsum dolor sit amet 3",
      Desp: "3 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus.",
    },
    {
      image: img4,
      Title: "Lorem ipsum dolor sit amet 4",
      Desp: "4 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + news.length) % news.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % news.length);
  };

  return (
    <section id="updates">
      <div className="flex justify-center mt-20">
        <div className=" w-4/5">
          <p className=" text-xl font-semibold">
            <span
              className=" h-1 w-1 bg-aiesec-blue text-aiesec-blue rounded-xl mr-2"
              content=" ">
              .
            </span>
            News & Events
            <span>
            <div className=" float-right text-sm">
            <button onClick={previousSlide} className=" py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-l-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue">Prev</button>
            <button onClick={nextSlide} className=" py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-r-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue">Next</button>
        </div>
            </span>
          </p>
          <div className=" grid lg:grid-cols-2 gap-x-2 mt-5">
            <div className="md:block hidden">
              <Image src={LargeImg} />
            </div>
            <div className=" grid grid-cols-1 lg:mt-0 mt-3">
              <div>
                <div className=" w-full grid grid-cols-9 p-2 shadow-lg rounded-lg mt-5 ">
                  <div className=" col-span-3">
                    <Image src={news[currentSlide].image} width={150} />
                  </div>
                  <div className=" col-span-6">
                    <h2 className=" px-3 font-semibold">
                      {news[currentSlide].Title}
                    </h2>
                    <p className=" text-sm mt-3 px-3">
                      {news[currentSlide].Desp}
                    </p>
                  </div>
                  <div className=" col-span-3 mt-2">
                    <Image src={news[currentSlide + 1].image} width={150} />
                  </div>
                  <div className=" col-span-6 mt-2">
                    <h2 className=" px-3 font-semibold">
                      {news[currentSlide + 1].Title}
                    </h2>
                    <p className=" text-xs mt-3 px-3 lg:text-sm ">
                      {news[currentSlide + 1].Desp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
