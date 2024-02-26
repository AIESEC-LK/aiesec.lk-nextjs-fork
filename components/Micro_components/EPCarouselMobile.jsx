import React, { useEffect, useState } from "react"
import Image from "next/image";
import image1 from "@public/assets/images/testimonials/Prabashi-min.jpg";
import image3 from "@public/assets/images/testimonials/India2-min.jpg";

const CarouselMobile = () =>{
    const slides = [
        {
            id:1,
            img1:image1,
            title1: 'Project On The Map - Prabashi Wanigasinghe',
            content1:"Volunteering in a foreign country taught me self-reliance and boosted my self-confidence. Despite the language barrier with Egyptians, I made an effort to learn some Arabic and successfully navigated the exchange experience",
        },
        {
            id:2,
            img1:image3,
            title1: 'My Eye-Opening Time Spent on Exchange in India',
            content1:"There is both anticipation and apprehension associated with taking part in an exchange programme. My trip to India was motivated by my interest in both making a positive contribution to the SDGs and seeing a new culture.",
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
        <div className=" w-screen flex justify-center h-auto">
            <div className=" w-5/6 h-auto">
                {slides.map((slide, index)=>(
                    <div 
                    key={index}
                    className={`w-full ${
                        index === currentSlide ? "block" : "hidden"
                      } transition-transform duration-300 transform ${
                        index === currentSlide ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                        <div className="">
                            <div className="relative">
                                <div className=" relative z-0 float-right -mb-20 mt-5 sm:mb-10"><Image src={slide.img1} width={250} h={400}/></div>
                                <div className=" relative float-left w-64 pt-4 pb-10 px-4 py-2 z-10 bg-white rounded-2xl shadow-aiesec-mid-grey shadow-2xl -top-[180px] md:-top-[-30px] -right-10 sm:right-0 sm:-bottom-10">
                                    <h2 className=" text-global-talent font-semibold text-center">{slide.title1}</h2><br></br>
                                    <p className=" text-center w-full">{slide.content1}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className=" absolute bottom-0 left-0 right-0 flex justify-center mt-20">
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

export default CarouselMobile;