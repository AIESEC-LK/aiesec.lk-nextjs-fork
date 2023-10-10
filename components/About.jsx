import React from "react";
import Image from "next/image";
import AboutAIESEC from "../public/assets/images/asl-img.jpg";

function About() {
  return (
    <div className="sm:flex  items-center px-10 sm:px-60 pt-14">
      <div className="text-right text-sm pt-11">
        <p>
          <span className="text-aiesec-blue font-semibold"><i>AIESEC</i></span> is the world’s largest youth-led organization,<br />
          currently presentin over 110 nations with a vision to<br />
          achieve peace and fulfilment of human kind’s potential.
        </p>
        <br />
        <p>
          AIESEC facilitates a network of Cross-cultural Exchanges<br />
          to enable Leadership Development in the form of Volunteering Experiences,<br />
          Professional Internships, Teaching Opportunities and Membership Experiences.
        </p>
        <br />
        <p>
        <span className="text-aiesec-blue font-semibold"><i>AIESEC in Sri Lanka</i></span> was established in 1995<br />
          as a member chapter of AIESEC International and has been<br />
          creating a positive impact ever since by providing leadership<br />
          opportunities to the youth of Sri Lanka to drive<br />
          the country towards a brighter future.
        </p>
        <br />
      </div>
      <div className="pl-7">
        <Image src={AboutAIESEC} alt="AIESEC Logo" width={500} />
      </div>
    </div>
  );
}

export default About;
