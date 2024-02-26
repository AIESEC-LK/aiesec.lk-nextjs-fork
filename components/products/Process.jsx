import Image from "next/image";

function Process(props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-20">
        <Image src={props.image} width={100} height={100} alt="Sign Up" />
        <h3 className="font-bold text-lg ">{props.title}</h3>
        <p className="w-2/3 text-center">{props.description}</p>
      </div>
    </div>
  );
}

export default Process;
