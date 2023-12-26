import React from "react";
import Projects from "@pages/products/global-volunteer/data.json";
import Image from "next/image";

function Projectsigv() {
  return (
    <div className="text-center">
      <h2 className="text-global-volunteer text-3xl font-bold pb-14">Our Projects</h2>
      <div id="projectsmapping" className="container mx-auto">
        {Projects &&
          Projects.map((record) => (
            <div key={record.name} className="flex flex-wrap justify-center">
              {record.ourprojects && record.ourprojects.map((data) => (
                <div key={data.id} className="flex flex-col items-center m-4 mx-6 pb-10">
                  {data.path && (
                    <div className="rounded-md overflow-hidden">
                      <Image src={data.path} alt="aiesec-logo" width={150} height={150} />
                    </div>
                  )}
                  <br/>
                  <h3 className="text-center">{data.title}</h3>
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
