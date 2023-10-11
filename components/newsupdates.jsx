import Image from "next/image";
import LargeImg from "@public/newsimg1.png";
import img1 from "@public/newsimg2.png";
import img2 from "@public/newsimg3.png";
import img3 from "@public/newsimg4.png";
import img4 from "@public/newsimg5.png";



const NewsUpdates =()=>{
    return(
        <section id="updates">
            <div className="flex justify-center mt-20">
                    <div className=" w-4/5">
                        <p className=" text-xl font-semibold"><span className=" h-1 w-1 bg-aiesec-blue text-aiesec-blue rounded-xl mr-2" content=" ">.</span>News & Events</p>
                        <div className=" grid lg:grid-cols-2 gap-x-2 mt-5">
                            <div><Image src={LargeImg}/></div>
                            <div className=" grid grid-cols-10">
                                <div className=" md:col-span-7 col-span-10">
                                    <div className=" grid grid-cols-9 p-2 shadow-lg rounded-lg">
                                        <div className=" col-span-3">
                                            <Image src={img4}/>
                                        </div>
                                        <div className=" col-span-6">
                                            <h2 className=" px-3 font-semibold">Lorem ipsum dolor sit amet</h2>
                                            <p className=" text-sm mt-3 px-3">Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae 
                                                felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus.</p>
                                        </div>
                                    </div>
                                    <div className=" grid grid-cols-9 p-2 shadow-lg rounded-lg mt-5">
                                        <div className=" col-span-3">
                                            <Image src={img2}/>
                                        </div>
                                        <div className=" col-span-6">
                                            <h2 className=" px-3 font-semibold">Lorem ipsum dolor sit amet</h2>
                                            <p className=" text-sm mt-3 px-3">Lorem ipsum dolor sit amet consectetur. Purus ut varius quis egestas eleifend condimentum. Pellentesque nunc vitae 
                                                felis imperdiet scelerisque tellus ornare magna tempor. Malesuada tellus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" md:col-span-3 col-span-10">
                                    <Image src={img1} className=" p-3 shadow-lg rounded-xl"/>
                                    <Image src={img3} className=" p-3 shadow-lg rounded-xl"/>
                                </div>

                            </div>
                        </div>
                    </div>    
                </div>
        </section>
    )
}

export default NewsUpdates;