import React from "react";
import Image from "next/image";

function Projectsigv(props) {
    return (
    <div className="text-center bg-white ">
      <div id="projectsmapping" className=" mx-auto flex flex-row">
        <div className="flex flex-wrap justify-center sm:m-auto">
          <div className="flex flex-col sm:m-4 sm:mx-6 mx-10 pb-10 sm:w-auto ">
            <div className="rounded-md overflow-hidden sm:max-w-full sm:min-w-150 sm:w-auto w-24 max-h-24 sm:max-h-max">
              <img src={props.img} alt="project-img" width={150} height={150} />
            </div>
            <br />
            <h3 className="text-center sm:text-md text-sm">{props.title}</h3>
            {/* You can include other project details here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectsigv;
