import Image from "next/image";
import Link from "next/link";
import MiddleVideo from "@components/partner-portal/Twinery/MiddleVideo";

function PartnerIntro() {
  return (
    <div className="text-center pt-20">
      <div className="text-center">
        <h2 className="text-center text-3xl bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text font-semibold pb-10 px-3">
          Innobee by MAS Innovation
        </h2>
      </div>
      <div className="flex-row lg:flex lg:px-12">
        <MiddleVideo />
        <div className="px-10">
          <Image
            src="/assets/images/partners/national/Twinery/TwineryLogo.jpeg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <br />
          <p className="text-justify">
            "Innobee" is a Pathway program specifically designed by MAS
            Innovation to attract talented AIESECers for internship
            opportunities. This program provides the company with direct access
            to the talented pool of undergraduates in universities, while
            offering AIESECers a valuable opportunity to gain industrial
            exposure in a reputed company like MAS Innovation. It serves as a
            springboard for undergraduates to excel, showcase, and groom their
            talents for the future.
          </p>
        </div>
      </div>
      <div className="py-8">
        <Link href="#opportunities">
          <button className=" text-white h-10 bg-gradient-to-r from-twinery-black to-twinery-red px-10 py-1 font-semibold rounded-2xl ">
            Explore all our opportunities
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PartnerIntro;
