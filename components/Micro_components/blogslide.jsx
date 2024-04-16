import Image from "next/image";
import icon1 from "@public/aiesecblogimg.png";
import icon2 from "@public/card_icon.png";
import Link from "next/link";

const BlogSlide = (props) => {
  return (
    <Link
      href="https://www.aiesec.lk/blog/" target="_blank"
    >
      <div className=" w-full shadow-xl shadow-grey-100 p-2 rounded-lg">
        <Image src={props.image} />
        <h2 className=" text-[13px] font-medium mt-3 px-1 font-sans leading-3">
          {props.headphrase}
        </h2>
        <p className=" font-normal text-[12px] text-aiesec-dark-grey px-2 mt-3">
          In the world of leadership, where diverse philosophies and
          methodologies abound, .
        </p>
        <div className=" bg-aiesec-light-grey rounded-xl grid grid-cols-9 mt-4">
          <div className=" p-3 col-span-2">
            <Image src={icon1} />
          </div>
          <div className=" p-3 col-span-6">
            <h2 className=" text-sm font-semibold text-aiesec-dark-grey">
              AIESEC in {props.entity}
            </h2>
            <p className=" text-xs text-aiesec-dark-grey">Oct 11, 2023</p>
          </div>
          {/* <div className=" mt-5">
                    <Image src={icon2}/>
                </div> */}
        </div>
      </div>
    </Link>
  );
};

export default BlogSlide;
