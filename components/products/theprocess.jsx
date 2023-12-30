import React from 'react';
import Image from 'next/image';
import data from "@pages/products/global-volunteer/data.json";; // Adjust the path to your data.json file

function TheProcess() {
  return (
    <div className="container mx-auto">
           <h2 className="text-global-volunteer text-3xl font-bold pb-14">The Process</h2>
      <div className="grid grid-cols-5 gap-4">
        {data.theprocess.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Image src={item.imagePath} alt={item.title} width={150} height={150} />
            <h3 className="mt-2">{item.title}</h3>
            <p className="italic">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheProcess;
