import React from 'react'
import Video from "@components/products/testivideo";

function VideoTestimonials() {
  return (
    <div className=' pt-10'>
      <h2 className=" text-center text-3xl font-semibold pb-8 px-3 text-global-volunteer">
        What they’re talking about Volunteering with AIESEC
      </h2>
      <div className='flex-row lg:flex justify-evenly p-9'>
      <Video/>
      <br />
      <Video/>
      </div>
    </div>
    
  )
}

export default VideoTestimonials