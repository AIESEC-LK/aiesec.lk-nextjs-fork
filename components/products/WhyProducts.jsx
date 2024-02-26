import React from "react";
import Image from "next/image";

function WhyProducts(props) {
  return (
    <div>
 
        <div className="m-5 flex flex-col items-center justify-center">
          <Image
            src={props.image}
            width={100}
            height={100}
            alt="Cross culture"
          />
          <p className="mt-3">{props.subtitle}</p>
       
        
      </div>
    </div>
  );
}

export default WhyProducts;
