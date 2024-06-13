import YouTubePlayer from "@components/partner-portal/YoutubePlayer";
import Link from "next/link";
import Image from "next/image";

const PartnerInfoSection = () => {
  return (
    <section className="items-center justify-center text-center mx-auto">
      <div className="mt-4 mb-12 container-fluid lg:container mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-center py-10 leading-10">
            <div className="font-cursive text-6xl pb-2 text-aiesec-mid-grey">
              Welcome to
            </div>
            <div className="px-2">
              <span className="text-black">Emerald</span>{" "}
              <span className="text-aiesec-blue">Partner Portal</span>
            </div>
          </h2>
        </div>
        <div className="flex items-center px-8 gap-8 my-4 flex-wrap lg:flex-nowrap">
          <div className="lg:pr-8 m-auto ">
            <YouTubePlayer videoId="l9ekz1r0IWM" />
          </div>

          {/* <img src="../public/assets/images/landing/../public/assets/images/landing/asl-img-min.jpg.png" alt="uniliever" width={180} /> */}
          <div className="mb-4">
            <h2 className="text-2xl p-3 text-aiesec-dark-grey font-bold">
              About
            </h2>
            <hr className="mx-auto mt-1 mb-4" />
            <p className="mt-2 text-justify font-body mb-5">
              Emerald International is one of Sri Lanka’s pioneers in men's wear
              and apparel manufacturing. With a seven-decade heritage, a passion
              for innovation, and a vertically integrated operation, the group
              now comprises six affiliated companies. We offer a complete
              end-to-end solution, encompassing design, manufacturing, sales,
              distribution, and an exclusive retail network.
            </p>
          </div>
        </div>
      </div>
      {/* Carousal */}
      {/* <div className="my-8 container-fluid lg:container mx-auto">
        <h4 className="text-2xl p-3 text-aiesec-dark-grey font-bold">
          Partnership between AIESEC and Emerald
        </h4>
        <hr className="w-1/2 mx-auto mt-1 mb-4" />
        <div className="h-[25vh] md:h-[50vh] mt-10 mb-8 px-8"></div>

        <p className="text-lg font-body pt-4 px-8 pb-8 text-justify">
          description
        </p>
      </div> */}

      {/* Video */}
      {/* <div className="pb-6">
      <YouTubePlayer videoId="juKVUM1-cKE" />
      </div> */}
      <div className="px-10 sm:px-28 pb-10">
        <h4 className="text-4xl p-3 text-aiesec-dark-grey font-bold">
          Partnership between AIESEC and Emerald
        </h4>
        <p>
          We entered into partnership with AIESEC in Sri Lanka owing to their
          distinguished local impact. Aligned with our corporate ethos of
          community engagement, we are dedicated to empowering youth and
          fulfilling our social responsibility. AIESEC's exemplary track record
          underscores their capacity to facilitate meaningful change, bolstering
          our joint commitment to advancing societal welfare through
          strategic collaboration.
        </p>
      </div>
      <div className="px-10 sm:px-36">
        <h4 className="text-4xl p-3 text-aiesec-dark-grey font-bold">
          Why should an AIESECer join Emerald ?
        </h4>
        <p>
          At our company, AIESECers can find a dynamic environment where their
          talents are valued, along with a rich heritage of trust and
          excellence. Our vibrant culture prioritizes innovation and social
          responsibility, making us an ideal destination for those seeking to
          make a meaningful impact in their careers.
        </p>
      </div>
      <div className="px-6">
        <Link href="#opportunities" className="mt-10 flex justify-center">
          <button className=" text-white bg-black px-8 py-3 font-bold rounded-3xl">
            Explore Our Opportunities
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PartnerInfoSection;
