import React from "react";
import Projects from "@pages/products/global-volunteer/data.json";
import Image from "next/image";

function Projectsigv2() {
    return (
      <div className="text-center bg-white">
        <h2 className="text-global-volunteer text-3xl font-bold pb-14">Our Destinations</h2>
        <div id="projectsmapping" className="mx-auto">
          {Projects &&
            Projects.map((record) => (
              <div key={record.name} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted gap here */}
                {record.ourdestination &&
                  record.ourdestination.map((data) => (
                    <div key={data.id} className="flex flex-col items-center m-2 mx-3 pb-5 w-full"> {/* Adjusted margin and padding here */}
                      {data.path && (
                        <div className="rounded-md overflow-hidden max-w-full max-h-40 ">
                          <Image src={data.path} alt="aiesec-logo" width={300} height={350} />
                        </div>
                      )}
                      <br />
                      <h3 className=" text-md text-sm font-bold">{data.countryname}</h3>
                      <h3 className="text-md text-sm">{data.projecttype}</h3>
                      {/* You can include other project details here */}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    );
  }
  
export default Projectsigv2;