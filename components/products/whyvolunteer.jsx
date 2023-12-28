import React from "react";
import Data from "@pages/products/global-volunteer/data.json";
import Image from "next/image";

function Whyvolunteer(){
    const pointdata = Data[3].whyvolunteer[1].points;

    return(
        <div className=" flex flex-wrap bg-white">
            <div className=" w-2/5 flex-wrap -translate-x-20">
                <Image src={Data[3].whyvolunteer[0].leftimage[0].path} alt="leftimage" width="800" height="800"/>
            </div>
            <div className=" w-3/5 py-6">
                <h2 className=" text-4xl text-global-volunteer font-bold pb-6">Why Volunteer with AIESEC</h2>
                <div>
                    {
                        pointdata && pointdata.map((data)=>(
                                <div key={data.id} className=" flex my-5">
                                    <Image src={Data[3].whyvolunteer[0].leftimage[0].tick} alt="greentick" width={30} height={20}/>
                                    <h3 className=" text-xl ml-4 font-medium">{data.content}</h3>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Whyvolunteer;