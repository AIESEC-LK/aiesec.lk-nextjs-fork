import Image from "next/image";
function CrossIcon(props) {
  return (
    <div className="flex">
      <Image
        src="/assets/images/partner-portal/Twinery/iconx.png"
        width={25}
        height={1}
        alt="icon"
        className="mr-2"
      />
      <h2 className=" text-sm sm:text-lg">{props.text}</h2>
    </div>
  );
}

export default CrossIcon;
