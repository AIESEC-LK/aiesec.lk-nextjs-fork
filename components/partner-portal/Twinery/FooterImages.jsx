import Image from "next/image";

function FooterImages() {
  return (
    <div>
      <div className="text-center pt-20">
        <h2 className="text-center text-3xl bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text font-semibold pb-10 px-3">
          let’s listen to our previous Innobees
        </h2>
      </div>
      <div className="flex justify-evenly px-96 bg-gradient-to-t from-twinery-red to-transparent h-1/5 z-10 w-screen bottom-0">
        <Image className="-z-10"
          src="/assets/images/partner-portal/Twinery/Testimonial.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
        <Image className="-z-10"
          src="/assets/images/partner-portal/Twinery/Testimonial.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default FooterImages;
