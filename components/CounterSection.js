'use client'
import React from "react";
import { useRef } from "react";
import Image from "next/image"
import banner1 from "@public/nlds2019.png";
// import CountUp from 'react-countup';
import NumberTransition from "./Micro_components/Microcounter";
import VisibilitySensor from "react-visibility-sensor";
import CountUpComponent from "./Micro_components/Microcounter";

export default function Counter(){
    return(
        <section className=" mt-48 w-screen">
            <div className=" relative flex align-middle justify-center">
                <Image src={banner1} className=" w-screen z-0 md:visible invisible"/>
                <div className=" absolute z-10 w-3/4 bg-aiesec-blue sm:h-52 h-fit rounded-xl sm:-top-32 -top-40">
                    <div className=" grid md:grid-cols-4 md:text-lg text-sm text-white md:m-14 m-5 grid-cols-1 grid-rows-4">
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
                                <li className=" info-num "><span><VisibilitySensor><CountUpComponent end={1500}/></VisibilitySensor></span><span>+</span></li>
                                <li className=" flex justify-center">Active Members</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
<<<<<<< HEAD
                                <li className=" flex justify-center xl:text-7xl lg:text-4xl text-4xl"><span id="unicount"><CountUpComponent end={19}/></span><span>+</span></li>
=======
                                <li className=" info-num"><span id="unicount">19</span><span>+</span></li>
>>>>>>> aaa45188aa59d4beada114f9d508d15186863688
                                <li className=" flex justify-center">Universities</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4 sm:mt-3 md:mt-0 lg:mt-0 px-3">
                            <ul className=" list-none">
<<<<<<< HEAD
                                <li className=" flex justify-center xl:text-7xl lg:text-4xl text-4xl"><span id="prjcount"><CountUpComponent end={100} /></span><span>+</span></li>
=======
                                <li className="info-num"><span id="prjcount">100</span><span>+</span></li>
>>>>>>> aaa45188aa59d4beada114f9d508d15186863688
                                <li className=" flex justify-center text-center">Social Projects Every Year</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 -mb-1 sm:mt-3 md:mt-0 lg:mt-0">
                            <ul className=" list-none">
<<<<<<< HEAD
                                <li className=" flex justify-center xl:text-7xl lg:text-4xl text-4xl"><span id="expcount"><CountUpComponent end={1500}/></span><span>+</span></li>
=======
                                <li className=" info-num"><span id="expcount">1500</span><span>+</span></li>
>>>>>>> aaa45188aa59d4beada114f9d508d15186863688
                                <li className=" flex justify-center text-center">Experiences Every Year</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <div className=" flex justify-center sm:mt-0 mt-40"><span className=" md:text-7xl text-4xl text-aiesec-mid-grey text-center">AIESEC CREATES YOUNG LEADERS FROM</span></div>
=======
            <div className=" flex justify-center"><span className=" md:text-7xl text-4xl text-aiesec-mid-grey text-center font-semibold">AIESEC CREATES YOUNG LEADERS FROM</span></div>
>>>>>>> aaa45188aa59d4beada114f9d508d15186863688
            <div className=" relative flex overflow-x-hidden">
                <div className=" animate-marquee whitespace-nowrap"><span className=" md:text-8xl text-6xl text-aiesec-mid-grey font-bold"><span className=" text-aiesec-red">VOLUNTEERING EXPERIENCES</span> & <span className=" text-aiesec-orange">PROFESSIONAL INTERNSHIPS</span> & <span className=" text-aiesec-red">TEACHING OPPORTUNITIES</span> & <span className=" text-aiesec-orange">MEMBERSHIP EXPERIENCES</span>.</span></div>
            </div>
        </section>
    )
}