import React from "react";
import Image from "next/image";
import logo from "@public/aiesecwhite.png";

const Footer = () => {
  return (
    <section className="relative">
        <div className=" grid grid-cols-12 bg-aiesec-blue text-white">
          <div className=" col-start-2 col-span-3">
            <Image src={logo} />
            <p className=" text-justify text-sm">AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities. Founded in 1948 and currently present in 110+ countries and territories, AIESEC is a non-governmental, and not-for-profit organization entirely run by youth for youth. AIESEC Sri Lanka was established in 1995, as a member chapter of AIESEC International</p>
          </div>
          <div className=" pl-5 pt-8 col-start-5 col-span-2">
            <h2 className=" text-lg font-semibold">Youth</h2>
            <ul className=" list-none text-sm">
              <li>Volunteer Abroad</li>
              <li>Intern Abroad</li>
              <li>Teach Abroad</li>
              <li>Become a Member</li>
              <li>Intern Locally</li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Footer;