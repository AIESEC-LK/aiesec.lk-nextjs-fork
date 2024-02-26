import React from "react";
import Data from "@pages/products/global-volunteer/data.json";
import Image from "next/image";

function Whyvolunteer(){
    const pointdata = Data[3].whyvolunteer[1].points;

    return(
        <div className=" flex sm:flex-wrap bg-white flex-col sm:flex-row">
            <div className=" sm:w-2/5 flex-wrap sm:-translate-x-20 -translate-x-8">
                <Image src={Data[3].whyvolunteer[0].leftimage[0].path} alt="leftimage" width="800" height="800"/>
            </div>
            <div className=" sm:w-3/5 py-6">
                <h2 className=" text-4xl text-aiesec-blue font-bold pb-6 sm:text-left text-center">Why Volunteer with AIESEC</h2>
                <div className=" mx-5">
                    {
                        pointdata && pointdata.map((data)=>(
                                <div key={data.id} className=" flex my-5">
                                    <div className="w-1/12 min-w-30 lg:max-w-20 md:max-w-15 sm:justify-end mx-3">
                                        <Image src={Data[3].whyvolunteer[0].leftimage[0].tick} alt="greentick" width={30} height={30}/>
                                    </div>
                                    <h3 className="w-11/12 text-xl font-medium ">{data.content}</h3>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Whyvolunteer;