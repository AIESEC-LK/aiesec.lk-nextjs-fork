import React from 'react'
import Image from 'next/image'

function Advantages() {
  return (
    <div className="flex flex-wrap justify-around pb-7">
    <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Cross culture"
        />
        <p>Cross Cultural Experience</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/SDGs.png"
          width={100}
          height={100}
          alt="SDGs"
        />
        <p>Contribution Towards the SDGs</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/Personal growth.png"
          width={100}
          height={100}
          alt="Personal Development"
        />
        <p>Personal Development</p>
      </div>
    </div>
  )
}

export default Advantages