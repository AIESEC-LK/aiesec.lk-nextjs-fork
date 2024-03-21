import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const items = [
    {
        title: "What is Twineray?",
        content: (
            <div>
                <div className=" container grid grid-cols-7">
                    <div className=" col-span-5">
                    <p className=" text-xl mx-1 my-1 font-bold to-twinery-red via-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent">What is Twinery ?</p>
                    <p className=" text-justify mt-4">As the source of innovation for MAS Holdings, the largest apparel and textile manufacturer in South Asia, Twinery is home to over 50 disruptive technologies across materials, lighting, heating, odor protection, and aqua-repellency. With 30+ years of experience manufacturing for the world’s largest brands, we have unparalleled knowledge of the human body and biomechanics, as well as fabric wearability and material science. Our business is built around 3 main pillars: Innovation, Digital, and Sustainability.</p>
                    </div>
                    <div className=" col-span-2 content-center text-center object-center">
                        <div className=" flex justify-center mt-3">
                            <Image src="/assets/images/partner-portal/Twinery/image1.png" alt="logo" width={200} height={100}/>
                        </div>
                    </div>
                </div>
                <div className=" container grid grid-cols-3 font-bold text-lg mt-5 text-center">
                    <h2>Innovation</h2>
                    <h2>Digital</h2>
                    <h2>Sustainability</h2>
                </div>
            </div>
        )
    },
    {
        title: "Twinery and Aiesec",
        content: (<p>Coming soon</p>)
    }
];

const WhatisTwinary = () => {
    const firstBtnRef = useRef();
    const[tabactive,setactive] = useState(0);

    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);

    return (
        <div className="mt-8 container mx-auto ">
            <div className="text-center">
                <h3 className="text-2xl font-semibold italic text-twinery-red">welcome to</h3>
                <h1 className="text-3xl font-black">TWINERY's PARTNER PORTAL</h1>
            </div>
            <div className=" mx-14 my-14">
                <div>
                    {items.map((item, index) => (
                        <button key={index} ref={index === 0 ? firstBtnRef : null} onClick={()=>setactive(index)} className=" text-2xl mx-4 my-4 font-bold to-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent border-none underline-offset-4">
                            {item.title}
                        </button>
                    ))}
                </div>
                <div>
                    {items.map((item,index)=>(
                        <div key={index} className={`${tabactive === index ? '' : 'hidden'}`}>
                            <div className=" drop-shadow-md">
                            {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhatisTwinary;
