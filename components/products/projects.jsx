import React from "react";
import Projects from "@pages/products/global-volunteer/data.json";
import Image from "next/image";

function Projectsigv() {
  return (

    <div className="text-center bg-white">
      <h2 className="text-global-volunteer text-3xl font-bold pb-14">Our Projects</h2>
      <div id="projectsmapping" className=" mx-auto">

        {Projects &&
          Projects.map((record) => (
            <div key={record.name} className="flex flex-wrap justify-center sm:m-auto">
              {record.ourprojects && record.ourprojects.map((data) => (
                <div key={data.id} className="flex flex-col items-center sm:m-4 sm:mx-6 mx-10 pb-10 sm:w-auto ">
                  {data.path && (
                    <div className="rounded-md overflow-hidden sm:max-w-full sm:min-w-150 sm:w-auto w-24 max-h-24 sm:max-h-max">
                      <Image src={data.path} alt="aiesec-logo" width={150} height={150} />
                    </div>
                  )}
                  <br/>
                  <h3 className="text-center sm:text-md text-sm">{data.title}</h3>
                  {/* You can include other project details here */}
                  
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projectsigv;
