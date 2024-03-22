import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const items = [
    {
        title: "What is Twineray?",
        content: (
            <div>
                <div className=" w-full grid grid-cols-7 ">
                    <div className=" lg:col-span-5 col-span-7">
                    <p className=" text-xl mx-1 my-1 font-bold to-twinery-red via-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent">What is Twinery ?</p>
                    <p className=" text-justify mt-4">As the source of innovation for MAS Holdings, the largest apparel and textile manufacturer in South Asia, Twinery is home to over 50 disruptive technologies across materials, lighting, heating, odor protection, and aqua-repellency. With 30+ years of experience manufacturing for the world’s largest brands, we have unparalleled knowledge of the human body and biomechanics, as well as fabric wearability and material science. Our business is built around 3 main pillars: Innovation, Digital, and Sustainability.</p>
                    </div>
                    <div className=" lg:col-span-2 col-span-7 content-center text-center object-center">
                        <div className=" flex justify-center mt-3">
                            <Image src="/assets/images/partner-portal/Twinery/image1.png" alt="logo" width={200} height={100}/>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 font-bold md:text-lg text-md text-md mt-5 text-center">
                    <div className=" flex"><Image src="/assets/images/partner-portal/Twinery/iconx.png" width={30} height={10} alt="icon"/><h2>Innovation</h2></div>
                    <div className=" flex"><Image src="/assets/images/partner-portal/Twinery/iconx.png" width={30} height={10} alt="icon"/><h2>Digital</h2></div>
                    <div className=" flex"><Image src="/assets/images/partner-portal/Twinery/iconx.png" width={30} height={10} alt="icon"/><h2>Sustainability</h2></div>
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
        <div className="mt-6 lg:mx-auto w-full">
            <div className="text-center">
                <h3 className="text-2xl font-semibold italic text-twinery-red w-full text-center">welcome to</h3>
                <h1 className="text-3xl font-black">TWINERY's PARTNER PORTAL</h1>
            </div>
            <div className="mx-4 my-8 lg:mx-14 lg:my-14 w-full">
                <div className=" content-center">
                    {items.map((item, index) => (
                        <button key={index} ref={index === 0 ? firstBtnRef : null} onClick={()=>setactive(index)} className={`lg:text-2xl text-xl mx-4 my-4 font-bold to-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent outline-none ${tabactive === index ? 'border-b-4 border-twinery-black pb-2' : ''}`}>
                            {item.title}
                        </button>
                    ))}
                </div>
                <div>
                    {items.map((item,index)=>(
                        <div key={index} className={`${tabactive === index ? '' : 'hidden'}`}>
                            <div className=" drop-shadow-md pl-2 pr-8">
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
