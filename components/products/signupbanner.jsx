import React from "react";
import Data from "@pages/products/global-volunteer/data.json";
import Image from "next/image";
import "@styles/products.css";

function IgvSignupbanner() {
  return (
    <div className=" mt-10 overflow-hidden bg-white">
      <div className="w-screen overflow-hidden signup-banner rounded-[40px] relative">
      <div className="absolute inset-0 bg-aiesec-orange-dark opacity-50 rounded-[40px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-center mx-8">Global Volunteer is a cross-cultural experience for youth (age 18 - 30) who want to gain personal development and leave an impact on the world.</span>
          <br/>
          <span className=" flex-col">
            <button className=" bg-aiesec-orange-dark px-10 py-1 rounded-3xl">Sign Up</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default IgvSignupbanner;
