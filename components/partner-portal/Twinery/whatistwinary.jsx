import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const items = [
    {
        title:(<div className=" mr-2 sm:mr-0"><p>What is Twineray?</p></div>),
        content: (
            <div>
                <div className=" w-full grid grid-cols-7 ">
                    <div className=" lg:col-span-5 col-span-7">
                    <p className=" text-xl mx-1 my-1 font-bold to-twinery-red via-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent">What is Twinery ?</p>
                    <p className=" text-justify mt-4">As the source of innovation for MAS Holdings, the largest apparel and textile manufacturer in South Asia, Twinery is home to over 50 disruptive technologies across materials, lighting, heating, odor protection, and aqua-repellency. With 30+ years of experience manufacturing for the world’s largest brands, we have unparalleled knowledge of the human body and biomechanics, as well as fabric wearability and material science. Our business is built around 3 main pillars: Innovation, Digital, and Sustainability.</p>
                    </div>
                    <div className=" lg:col-span-2 col-span-7 content-center text-center object-center">
                        <div className=" flex justify-center mt-3">
                            <Image src="/assets/images/partners/national/Twinery/TwineryLogo.jpeg" alt="logo" width={200} height={100}/>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 font-bold md:text-lg text-md text-md mt-5 text-center">
                    <div className=" flex"><Image src="/assets/images/partner-portal/Twinery/iconx.png" width={25} height={2} alt="icon"/><h2 className=" text-sm sm:text-lg">Innovation</h2></div>
                    <div className=" flex"><Image src="/assets/images/partner-portal/Twinery/iconx.png" width={25} height={2} alt="icon"/><h2 className=" text-sm sm:text-lg">Digital</h2></div>
                    <div className=" flex"><Image src="/assets/images/partner-portal/Twinery/iconx.png" width={25} height={2} alt="icon"/><h2 className=" text-sm sm:text-lg">Sustainability</h2></div>
                </div>
            </div>
        )
    },
    {
        title: (<div className=" ml-2 sm:ml-0"><p>Twinery and Aiesec</p></div>),
        content: (<div>
            <div className=" flex flex-wrap">
            <p className=" text-xl sm:text-2xl mx-1 my-1 font-bold to-twinery-red via-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent ">Twinery and Aiesec</p>
            <div className="flex flex-wrap right-0 lg:right-0 sm:ml-4 md:ml-8 lg:ml-10">
            <Image src="/assets/images/partners/national/Twinery/TwineryLogo.jpeg" width={120} height={30} alt="icon"/>
            <Image src="/assets/images/bluelogo.png" width={180} height={100} alt="icon"/>
            </div>
            
            </div>
            <div className=" w-full text-justify flex flex-wrap">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )}
];

const WhatisTwinary = () => {
    const firstBtnRef = useRef();
    const[tabactive,setactive] = useState(0);

    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);

    return (
        <div className="mt-6 lg:mx-12 mx-8 md:mx-6">
            <div className="text-center">
                <h3 className="text-2xl font-semibold italic text-twinery-red text-center">welcome to</h3>
                <h1 className="text-3xl font-black">TWINERY's PARTNER PORTAL</h1>
            </div>
            <div className="mx-0 lg:mx-14 lg:my-14 ">
                <div className=" content-center">
                    {items.map((item, index) => (
                        <button key={index} ref={index === 0 ? firstBtnRef : null} onClick={()=>setactive(index)} className={`lg:text-2xl xs:text-base mx-1/2 sm:mx-2 my-2 font-bold to-twinery-red from-twinery-black bg-gradient-to-r bg-clip-text text-transparent outline-none ${tabactive === index ? 'border-b-4 border-twinery-black pb-2' : ''}`}>
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className=" w-full">
                    {items.map((item,index)=>(
                        <div key={index} className={`${tabactive === index ? '' : 'hidden'}`}>
                            <div className=" w-full drop-shadow-md mx-auto">
                                <div className="w-full">{item.content}</div>
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhatisTwinary;
