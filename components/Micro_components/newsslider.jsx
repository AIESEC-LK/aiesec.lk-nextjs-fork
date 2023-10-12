import React from "react";
import { useState } from "react";
import Image from "next/image";
import img1 from "@public/newsimg2.png";
import img2 from "@public/newsimg3.png";
import img3 from "@public/newsimg4.png";
import img4 from "@public/newsimg5.png";

const NewsSlider = () => {
  const news = [
    {image:img1, Title:"Lorem ipsum dolor sit amet 1", Desp:"1 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus."},
    {image:img2, Title:"Lorem ipsum dolor sit amet 2", Desp:"2 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus."},
    {image:img3, Title:"Lorem ipsum dolor sit amet 3", Desp:"3 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus."},
    {image:img4, Title:"Lorem ipsum dolor sit amet 4", Desp:"4 Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus."},
];

const [currentSlide, setCurrentSlide] = useState(0);

const previousSlide = () => {
      setCurrentSlide((prev) => (prev - 2 + news.length) % news.length);
    };

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 2) % news.length);
    };

    return (
      <div>
        <div className=" float-right ">
            <button onClick={previousSlide} className=" text-sm py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-l-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue">Prev</button>
            <button onClick={nextSlide} className=" text-sm py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-r-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue">Next</button>
        </div>
        <div className=" w-full grid grid-cols-9 p-2 shadow-lg rounded-lg mt-5">
          <div className=" col-span-3">
            <Image src={news[currentSlide].image} width={150}/>
          </div>
          <div className=" col-span-6">
            <h2 className=" px-3 font-semibold">{news[currentSlide].Title}</h2>
            <p className=" text-sm mt-3 px-3">
              {news[currentSlide].Desp}
            </p>
          </div>
          <div className=" col-span-3 mt-2">
            <Image src={news[currentSlide+1].image} width={150}/>
          </div>
          <div className=" col-span-6 mt-2">
            <h2 className=" px-3 font-semibold">{news[currentSlide+1].Title}</h2>
            <p className=" text-sm mt-3 px-3">
              {news[currentSlide+1].Desp}
            </p>
          </div>
        </div>
      </div>
    );
  };

export default NewsSlider;