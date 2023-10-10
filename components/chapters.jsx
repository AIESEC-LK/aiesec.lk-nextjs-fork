import React from 'react';
import Image from 'next/image';
import img1 from '@public/assets/images/chapters/University of Peradeniya.png';
import img2 from '@public/assets/images/chapters/University of Ruhuna.gif';
import img3 from '@public/assets/images/chapters/University of Kelaniya.png';
import img4 from '@public/assets/images/chapters/University of Sri Jayewardenepura.png';
import img5 from '@public/assets/images/chapters/University of Moratuwa.png';
import img6 from '@public/assets/images/chapters/University of Colombo.png';
import img7 from '@public/assets/images/chapters/Sri Lanka Institute of Information Technology.png';
import img8 from '@public/assets/images/chapters/General Sir John Kotelawala Defense University.png';
import img9 from '@public/assets/images/chapters/Informatics Institute of Technology.png';
import img10 from '@public/assets/images/chapters/National Institute of Business Management.png';
import img11 from '@public/assets/images/chapters/National School of Business Management.png';
import img12 from '@public/assets/images/chapters/Wayamba University of Sri Lanka.png';
import img13 from '@public/assets/images/chapters/Rajarata University of Sri Lanka.png';
import img14 from '@public/assets/images/chapters/Asia Pacific Institute of Information Technology.jpg';
import img15 from '@public/assets/images/chapters/Saegis Campus.png';

const LocalChapters = () => {
    // Define an array of objects with icon URLs and names
    const icons = [
      { name: 'University of Colombo', url: img6 , width: 60 },
      { name: 'University of Kelaniya ', url: img3 , width: 65},
      { name: 'University of Moratuwa', url: img5 , width: 65},
      { name: 'University of Sri Jayawardanapura', url: img4 , width: 65},
      { name: 'University of Peradeniya', url: img1 , width: 65},
      { name: 'University of Ruhuna', url: img2 , width: 50},
      { name: 'Sri Lanka Institute of Information Technology ', url: img7 , width: 60},
      { name: 'General Sir John Kotelawala Defense University ', url: img8 , width: 80},
      { name: 'Informatics Institute of Technology ', url: img9 , width: 70},
      // Add more icons as needed
    ];


    const iconsRow2 = [
      { name: 'National Institute of Business Management', url: img10 , width: 100},
      { name: 'National School of Business Management ', url: img11 , width: 120},
      { name: 'Wayamba University of Sri Lanka', url: img12 , width: 70},
      { name: 'Rajarata University of Sri Lanka', url: img13 , width: 50},
      { name: 'Asia Pacific Institute of Information Technology', url: img14 , width: 80},
      { name: 'Saegis Campus', url: img15 , width: 70},
    ];

  
    return (
      <div className="text-center">
        <h2 className=" text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">Local Chapters</h2>
        <div className=" grid grid-cols-3 sm:grid-cols-3 md:flex-wrap md:flex md:justify-center xl:space-x-8 mt-5 flex-row justify-items-center xl:mx-8">
          {icons.map((icon, index) => (
            <div key={index} className="text-inline sm:col-span-1 mt-5 md:w-1/5">
              <Image
                src={icon.url}
                alt={icon.name}
                className="mx-auto w-18 h-16 mb-2 top-0"
                width={icon.width} height={400}
              />
              <p className=" sm:text-sm text-xs">{icon.name}</p>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 md:flex-wrap md:flex md:justify-center xl:space-x-8 mt-5 ">
          {iconsRow2.map((icon, index) => (
            <div key={index} className="text-inline xl:w-1/12 mt-5 md:w-1/4">
              <Image
                src={icon.url}
                alt={icon.name}
                className="mx-auto w-18 h-16 mb-2"
                width={icon.width} height={500}
              />
              <p className="text-sm">{icon.name}</p>
            </div>
          ))}
        </div>
        
      </div>
    );
  };
  
  export default LocalChapters;