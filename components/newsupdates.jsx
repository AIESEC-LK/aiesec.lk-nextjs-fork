import Image from "next/image";
import React, { useState } from "react";
import LargeImg from "@public/assets/images/events/nlds-min.jpg";
import img1 from "@public/assets/images/events/nlds2-min.jpg";
import img2 from "@public/assets/images/events/insight-min.jpg";
import img3 from "@public/assets/images/events/Odyssey-min.jpg";
import img4 from "@public/assets/images/events/inception-min.jpeg";
import NewsSlider from "./Micro_components/newsslider";

const NewsUpdates = () => {
  const news = [
    {
      image: img1,
      Title: "National Leadership Develeopment Seminar 2023",
      Desp: "FRI, OCT 13 - OCT 15 at Hotel Carolina",
      Desp: "NLDS 2023 is a three days long conference which focuses on delivering leadership development experiences, networking spaces, outbound training and much more!"
    },
    {
      image: img2,
      Title: "Insight 2023",
      Desp: "WED, NOV 22 AT 9 AM at University of Colombo",
      Desp: "Insight 2023, the largest corporate day organized by AIESEC in University of Colombo, brings together students, undergraduates, and corporate leaders to share knowledge, connect, and collaborate.",
    },
    {
      image: img3,
      Title: "Odyssey 3.0",
      Desp: "SAT, OCT 28 - OCT 29 at Lavanga Beach Resort",
      Desp: "LDS 3.0 will be the biggest conference organized by AIESEC in University of Ruhuna in 2023 where 150+ individuals from a diverse set of fields meet in one place to have a remarkable leadership experience.",
    },
    {
      image: img4,
      Title: "Inception 4.0",
      Desp: "THU, NOV 2 AT 10 AM at NSBM",
      Desp: "Inception 4.0 continues AIESEC's legacy of youth leadership. It offers undergraduates a unique platform to enhance their leadership skills while addressing the challenges they'll encounter.",
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
          <div className=" text-xl font-semibold">
            <span
              className=" h-1 w-1 bg-aiesec-blue text-aiesec-blue rounded-xl mr-2"
              content=" ">
              .
            </span>
            News & Events
            <div className="flex">
            <div className=" float-right text-sm">
            <button onClick={previousSlide} className=" py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-l-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue">Prev</button>
            <button onClick={nextSlide} className=" py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-r-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue">Next</button>
        </div>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-x-2 mt-5">
            <div className="md:block hidden">
              <Image src={LargeImg} />
              <h2 className="text-xl font-semibold pt-3">National Leadership Development Seminar 2023</h2>
              <p>FRI, OCT 13 - OCT 15 at Hotel Carolina</p>
            </div>
            <div className=" grid grid-cols-1 lg:mt-0 mt-3">
              <div>
                <div className=" w-full grid grid-cols-9 ml-2 shadow-lg rounded-lg ">
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
