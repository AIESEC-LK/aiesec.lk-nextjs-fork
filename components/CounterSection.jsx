import Image from "next/image"
import banner1 from "@public/nlds2019.png";

export default function Counter(){
    return(
        <section className=" mt-56">
            <div className=" relative flex align-middle justify-center">
                <Image src={banner1} className=" w-screen z-0"/>
                <div className=" absolute z-10 w-3/4 bg-general-blue h-52 rounded-xl -top-32">
                        hello
                </div>
            </div>
            <div className=" relative flex overflow-x-hidden">
                <div className=" animate-marquee whitespace-nowrap"><span className=" text-8xl">YOUTH LEADERSHIP EXPERIENCE YOUTH LEADERSHIP EXPERIENCE</span></div>
            </div>
        </section>
    )
}