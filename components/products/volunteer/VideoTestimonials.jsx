import React from 'react'
import Video from "@components/products/volunteer/testivideo";

function VideoTestimonials() {

  return (
    <div className=' pt-10 bg-global-volunteer'>
      <h2 className=" text-center text-3xl font-semibold pb-4 px-3 text-white">
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