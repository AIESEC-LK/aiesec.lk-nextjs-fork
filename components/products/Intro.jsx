import React from "react";
import Image from "next/image";

function Intro(props) {
  return (
    <div className="pb-10">
      {/* Nicely Responsive */}
      <div className='flex flex-col items-center md:flex-row'>
      <div>
        <Image
          src="/assets/images/products/volunteer/gv-intro-image.png"
          width={700}
          height={700}
          alt="Intro Image"
        />
      </div>
      <div className="p-10">
        <h1 className={`text-${props.color} text-4xl font-bold pb-4`}>What is {props.title}?</h1>
        <Image className="pb-3"
          src={props.logo}
          width={500}
          height={500}
          alt="Intro Image"
        />
        <p className="pb-3">{props.description}</p>
        <div className="flex">
          <p className="mr-7"><span className="font-bold">Duration:</span> {props.duration}</p>
          <p><span className="font-bold">Organization:</span> {props.organization}</p>
        </div>
        <div>
          <a href={props.url} target="_blank"><button className={`bg-${props.color} text-white px-6 py-2 rounded-md mt-4 mr-6`}>Sign Up</button></a>
          <a href={props.url} target="_blank"><button className={`border-2 border-${props.color} text-${props.color} px-6 py-2 rounded-md mt-4`}>Learn More</button></a>

        </div>
      </div>
    </div>
    
    <div className="flex flex-col justify-around items-center md:flex-row">
    <div className="m-5 flex flex-col items-center justify-center">
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Cross culture"
        />
        <p className="mt-3">Cross Cultural Experience</p>
      </div>
      <div className="m-5 flex flex-col items-center justify-center">
        <Image
          src="/assets/images/products/volunteer/SDGs.png"
          width={100}
          height={100}
          alt="SDGs"
        />
        <p className="mt-3">Contribution Towards the SDGs</p>
      </div>
      <div className="m-5 flex flex-col items-center justify-center">
        <Image
          src="/assets/images/products/volunteer/Personal growth.png"
          width={100}
          height={100}
          alt="Personal Development"
        />
        <p className="mt-3">Personal Development</p>
      </div>
    </div>
    </div>
  );
}

export default Intro;
