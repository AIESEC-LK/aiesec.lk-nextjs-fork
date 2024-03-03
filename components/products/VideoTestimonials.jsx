import React from 'react'
import Video from "@components/products/testivideo";

function VideoTestimonials(props) {

  return (
    <div className={`pt-10 pb-5`}>
      <h2 className=" text-center text-3xl font-semibold pb-4 px-3 text-white">
        What they’re talking about AIESEC
      </h2>
      <div>
      <Video />
      </div>
    </div>
    
  )
}

export default VideoTestimonials