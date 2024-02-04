import React from "react";
import Projects from "@pages/products/global-volunteer/data.json";
import Image from "next/image";

function Projectsigv2(props) {
    return (
      <div className="text-center bg-white">
        <div id="projectsmapping" className="mx-auto">
  
              <div> {/* Adjusted gap here */}
                    <div className="flex flex-col items-center m-2 mx-3 px-5 pb-5 w-full"> {/* Adjusted margin and padding here */}
                        <div className="rounded-md overflow-hidden max-w-full max-h-40 ">
                          <Image src={props.path} alt="aiesec-logo" width={300} height={350} />
                        </div>
                      <br />
                      <h3 className=" text-md text-sm font-bold">{props.countryname}</h3>
                      <h3 className="text-md text-sm">{props.projecttype}</h3>
                      {/* You can include other project details here */}
                    </div>
              </div>
        </div>
      </div>
    );
  }
  
export default Projectsigv2;