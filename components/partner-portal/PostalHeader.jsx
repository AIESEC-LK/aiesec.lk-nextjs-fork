import React from 'react'
import YouTubePlayer from "@components/partner-portal/YoutubePlayer";

function PostalHeader() {
  return (
    <div className="mt-4 mb-12 container m-auto">
      <div>
        <h2 className='text-4xl font-bold text-center mb-6 py-8'>Welcome to <span
          className="text-aiesec-blue">Unilever's</span> Partner Portal</h2>
      </div>
      <div className='flex items-center px-14 gap-8'>
        <div className='pr-8'>
          <YouTubePlayer videoId="juKVUM1-cKE"/>
        </div>
        {/* <img src="../public/assets/images/landing/../public/assets/images/landing/asl-img-min.jpg.png" alt="uniliever" width={180} /> */}
        <div>
          <h2 className='font-bold text-2xl'>About Unilever</h2>
          <hr className="my-2"/>
          <p className="mt-4">Unilever, a global Consumer Goods company established in Sri Lanka in the early 1900s with
            brands such as
            Sunlight, Lux, Pears Rose. They then expanded into soap, bakery items who were then overlooked by Lever
            Brothers Ceylon Limited Ceytea, Lever Aqua Products etc., and were then brought under one umbrella of
            Unilever Sri Lanka. They now focus on Fast Moving Consumer Goods (FMCG) with its production and distribution
            plants in close proximity to its head office. Through all their initiatives, Unilever Sri Lanka always
            strives to provide “Feel good, look good, and get more out of life”.</p>
        </div>
      </div>
    </div>
  )
}

export default PostalHeader