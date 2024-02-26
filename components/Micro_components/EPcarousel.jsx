import React, { useEffect, useState } from "react"
import Image from "next/image";
import image1 from "@public/assets/images/testimonials/Prabashi-min.jpg";
import image2 from "@public/assets/images/testimonials/India1-min.jpg";
import image3 from "@public/assets/images/testimonials/India2-min.jpg";
import image4 from "@public/assets/images/testimonials/Prabashi2-min.jpg";

const Carousel = () =>{
    const slides = [
        {
            id:1,
            img1:image1,
            img2:image2,
            title1: 'Project On The Map - Prabashi Wanigasinghe',
            title2: 'The Most Remarkable Occasion',
            content1:"Volunteering in a foreign country taught me self-reliance and boosted my self-confidence. Despite the language barrier with Egyptians, I made an effort to learn some Arabic and successfully navigated the exchange experience",
            content2:"The highlight of my exchange experience was getting to play sports like cricket and football with locals and my host family and host community. It encapsulated the friendliness and welcome of my trip."
        },
        {
            id:2,
            img1:image3,
            img2:image4,
            title1: 'My Eye-Opening Time Spent on Exchange in India',
            title2: 'Project On The Map - Prabashi Wanigasinghe',
            content1:"There is both anticipation and apprehension associated with taking part in an exchange programme. My trip to India was motivated by my interest in both making a positive contribution to the SDGs and seeing a new culture.",
            content2:"Volunteering in a foreign country taught me self-reliance and boosted my self-confidence. Despite the language barrier with Egyptians, I made an effort to learn some Arabic and successfully navigated the exchange experience. "
        
        },

    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () =>{
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () =>{
        setCurrentSlide((currentSlide -1 + slides.length) % slides.lenght);
    };

    useEffect(()=>{
        const interval =  setInterval(()=>{
            nextSlide();
        }, 2000);

        return ()=>{
            clearInterval(interval);
        };
    }, [currentSlide]);

    return(
        <div className=" w-screen flex justify-center mt-10">
            <div className=" xl:w-3/4 overflow-hidden w-full mx-10">
                {slides.map((slide, index)=>(
                    <div 
                    key={index}
                    className={`w-full ${
                        index === currentSlide ? "block" : "hidden"
                      } transition-transform duration-300 transform ${
                        index === currentSlide ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                        <div className=" grid grid-cols-2 grid-rows-1 grid-flow-row mb-10">
                            <div className=" relative ">
                                <div className=" relative z-0 float-right"><Image src={slide.img1} width={300} className=""/></div>
                                <div className=" absolute float-left xl:float-none w-64 md:pt-8 md:pb-8 px-6 py-6 z-10 bg-white rounded-2xl shadow-aiesec-mid-grey shadow-2xl xl:top-[70px] xl:right-44 top-[50px]">
                                    <h2 className=" text-global-talent font-semibold text-center">{slide.title1}</h2><br></br>
                                    <p className=" text-center">{slide.content1}</p>
                                </div>
                            </div>
                            <div className=" relative">
                            <div className="relative z-0 float-right "><Image src={slide.img2} width={300} className=""/></div>
                            <div className="absolute float-left xl:float-none w-64 pt-8 pb-8 px-6 py-6 z-10 bg-white rounded-2xl shadow-aiesec-mid-grey shadow-2xl xl:top-[70px] xl:right-44 top-[50px]">
                                <h2 className=" text-global-volunteer font-semibold text-center">{slide.title2}</h2><br></br>
                                    <p className=" text-center">{slide.content2}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className=" absolute bottom-0 left-0 right-0 flex justify-center mt-5">
                      {slides.map((_, index)=>(
                        <span
                        key={index}
                        onClick={()=> setCurrentSlide(index)}
                        className={`w-3 h-3 mx-2 cursor-pointer rounded-full ${
                            index === currentSlide ? "bg-aiesec-blue" : " bg-aiesec-mid-grey"
                          }`}
                        >
                        </span>
                      ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;