import OpptnBox from "./Micro_components/opptnbox";
import image1 from "@public/assets/images/landing/gv-min.png";
import image2 from "@public/assets/images/landing/gt-min.png";
import image3 from "@public/assets/images/landing/gte-min.png";
import gv from "@public/assets/images/products/logos/product_GV-horizontal-white-min.png";
import gt from "@public/assets/images/products/logos/product_GT-horizontal-white-min.png";
import gte from "@public/assets/images/products/logos/product_GTe-horizontal-white-min.png";

const Opportunities = () => {
  return (
    <section id="opp" className="pt-10">
      <h2 className="text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">
        Our Opportunities
      </h2>
      <div className=" flex justify-center align-middle">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 xl:px-56 md:gap-x-10 grid-cols-1">
          <div>
            <OpptnBox
              image={image1}
              fnimage={gv}
              details="Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."
              url={`products/global-volunteer`}
            />
          </div>
          <div>
            <OpptnBox
              image={image2}
              fnimage={gt}
              details="Global Talent is an internship experience for young people aiming towards professional career development in a global setting."
              url={`products/global-talent`}
            />
          </div>
          <div className=" sm:col-span-2 lg:col-span-1 md:flex md:justify-center col-span-1">
            <OpptnBox
              image={image3}
              fnimage={gte}
              details="Global Teacher is a global teaching internship opportunity for young people who seek to develop themselves and their career by engaging with a professional teaching experience."
              url={`products/global-teacher`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
