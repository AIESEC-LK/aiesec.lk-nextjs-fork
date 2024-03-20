import Image from "next/image";
import Link from "next/link";
import MiddleVideo from "@components/partner-portal/Twinery/MiddleVideo";

function PartnerIntro() {
  return (
    <div className="text-center pt-20">
      <div className="text-center">
        <h2 className="text-center text-3xl bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text font-semibold pb-10 px-3">
          Innobee by twinery
        </h2>
      </div>
      <div className="flex px-36">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="py-8">
        <Link
          href="https://github.com/ashandimantha2000"
          target="_blank"
        >
          <button className=" text-white h-10 bg-gradient-to-r from-twinery-black to-twinery-red px-10 py-1 font-semibold rounded-2xl ">
            Explore all our opportunities
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PartnerIntro;
