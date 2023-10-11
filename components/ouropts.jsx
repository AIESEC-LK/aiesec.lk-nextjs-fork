import OpptnBox from "./Micro_components/opptnbox";
import image1 from "@public/Rectangle 9.png";
import image2 from "@public/Rectangle 10.png";
import image3 from "@public/Rectangle 11.png";
import igt from "@public/product_GTe-top-white.png";
import igte from "@public/product_GTe-top-white.png";
import igv from "@public/product_GV-horizontal-white.png";


const Opportunities = () => {
  return (
    <section id="opp" className="pt-10">
      <h2 className="text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">
        Our Opportunities
      </h2>
      <div className=" flex justify-center align-middle">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 xl:px-56 md:gap-x-10 grid-cols-1">
          <div>
          <OpptnBox image={image1} fnimage={igv} details="Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"/>
          </div>
          <div>
          <OpptnBox image={image2} fnimage={igv} details="Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"/>
          </div>
          <div className=" sm:col-span-2 lg:col-span-1 md:flex md:justify-center col-span-1">
          <OpptnBox image={image3} fnimage={igv} details="Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
