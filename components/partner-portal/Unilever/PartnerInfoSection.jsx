import YouTubePlayer from "@components/partner-portal/YoutubePlayer";
import Link from "next/link";
import { Carousel } from "flowbite-react";

const PartnerInfoSection = () => {
  return (
    <section className="items-center justify-center text-center mx-auto">
      <div className="mt-4 mb-12 container-fluid lg:container mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-center py-10 leading-10">
            <div className="font-cursive text-6xl text-aiesec-mid-grey">
              Welcome to
            </div>
            <div className="px-2">
              <span className="text-black">Unilever</span>{" "}
              <span className="text-aiesec-blue">Partner Portal</span>
            </div>
          </h2>
        </div>
        <div className="flex items-center px-8 gap-8 my-4 flex-wrap lg:flex-nowrap">
          <div className="lg:pr-8 m-auto ">
            <YouTubePlayer videoId="juKVUM1-cKE" />
          </div>

          {/* <img src="../public/assets/images/landing/../public/assets/images/landing/asl-img-min.jpg.png" alt="uniliever" width={180} /> */}
          <div className="mb-4">
            <h2 className="text-2xl p-3 text-aiesec-dark-grey font-bold">
              About Unilever
            </h2>
            <hr className="mx-auto mt-1 mb-4" />
            <p className="mt-2 text-justify font-body mb-5">
              Over the past 85 years, Unilever has been deeply rooted in Sri
              Lankan society, curating a landscape that preserves and nurtures
              the true Sri Lankan way of life. We are one of the largest
              Fast-Moving Consumer Goods (FMCG) companies in the country and
              produce 96% of our products to the strictest manufacturing
              standards at our manufacturing facility in Horana and local
              third-party manufacturing sites. Our portfolio comprises 30 market
              leading brands including Sunlight, Signal, Lifebuoy, Knorr, Vim
              and many others through which we enhance the lives of 21 million
              Sri Lankans every day.
            </p>
            <p className="mt-2 text-justify font-body mb-5">
              As a good corporate citizen, we have been ranked the ‘Number 1
              Most Respected FMCG Company’ in Sri Lanka for the 17th consecutive
              year (LMD’s Most Respected Entities in Sri Lanka, 2022), adjudged
              the ‘Number 1 Employer of Choice’ for the 11th consecutive year
              (NielsenIQ, 2022) and crowned the ‘Best Corporate in Sri Lanka for
              fostering Employee Relations’ in 2022 (Best Corporate Citizen
              Sustainability Awards 2022), among many other accolades.
            </p>
          </div>
        </div>
        <p className="text-left -mt-6">
          Our commitment to enhance the livelihoods of the communities we
          operate in, is as strong today as it was when we began operations in
          the country in 1938. As such, we look forward to the next 100 years in
          Sri Lanka with pride and determination to deliver on our promise of
          making sustainable living commonplace.
        </p>
      </div>
      <div>
        <Link href="#opportunities" className="my-10 flex justify-center">
          <button className=" text-white bg-aiesec-blue px-8 py-3 font-bold rounded-3xl">
            Explore Our Opportunities
          </button>
        </Link>
      </div>

      {/* Carousal */}
      <div className="h-72 sm:h-72 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/assets/images/partners/national/unilever/images/1.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/2.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/3.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/4.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/5.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/6.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/7.jpeg" />

          <img src="/assets/images/partners/national/unilever/images/8.jpeg" />
        </Carousel>
      </div>

      <div className="px-6">
        <p className="p-6">
          If you were to ask an AIESECer in Sri Lanka to name one of the most
          used words in their AIESEC vocabulary, Unilever is bound to be on the
          list. It is not only because of the proud presence of the organization
          but because of the purposeful partnership that binds two like-minded
          organizations, AIESEC Sri Lanka and Unilever LK since 2015 and its
          impact. Unilever LK has always been a proud partner that we’ve had to
          develop the talent of our membership.
        </p>
      </div>
    </section>
  );
};

export default PartnerInfoSection;
