import React from 'react'
import Video from "@components/products/testivideo";


function VideoTestimonials() {
  return (
    <div className='bg-${bgColor} pt-10'>
      <h2 className=" text-center text-3xl text-white font-semibold pb-8 px-3">
        What they’re talking about Volunteering with AIESEC
      </h2>
      <div className='flex justify-evenly pb-9'>
      <Video/>
      <Video/>
      </div>
    </div>
    
  )
}

export default VideoTestimonials