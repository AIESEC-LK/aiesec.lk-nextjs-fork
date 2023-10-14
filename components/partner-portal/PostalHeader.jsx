import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import YouTubePlayer from "@components/partner-portal/Youtube";


function PostalHeader() {
  return (
    <div>
      <div>
        <h2 className='text-4xl font-bold text-center mb-5 py-8'>Welcome to Unilever's Partner Portal</h2>
    </div>
    <div className='flex items-center px-14'>
    <div className='pr-10'>
    <YouTubePlayer videoId="juKVUM1-cKE"/>
    </div>
      {/* <img src="../public/assets/images/landing/../public/assets/images/landing/asl-img-min.jpg.png" alt="uniliever" width={180} /> */}
     <div>
      <h2 className='font-bold text-2xl'>About Unilever</h2>
     <p>Unilever, a global Consumer Goods company established in Sri Lanka in the early 1900s with brands such as Sunlight, Lux, Pears Rose. They then expanded into soap, bakery items who were then overlooked by Lever Brothers Ceylon Limited Ceytea, Lever Aqua Products etc., and were then brought under one umbrella of Unilever Sri Lanka. They now focus on Fast Moving Consumer Goods (FMCG) with its production and distribution plants in close proximity to its head office. Through all their initiatives, Unilever Sri Lanka always strives to provide “Feel good, look good, and get more out of life”.</p>
     <br />
     <Link href="#partneropp">
      <button className=" text-white bg-aiesec-blue px-10 py-1 font-semibold rounded-3xl ">Explore Our Opportunities</button>
      </Link>
     </div>
    </div>
    </div>
  )
}

export default PostalHeader