
import Image from 'next/image'

function Process() {
  return (
    <div>
        <h2 className="text-global-volunteer flex justify-center text-3xl font-bold pb-14 p-8">Process</h2>
        <div className="flex flex-wrap justify-around">
    <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Sign Up"
        />
        <h3 className='font-bold text-lg'>Sign Up</h3>
        <p>Sign up to create your account and access our opportunities. It's free!</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Apply"
        />
        <h3 className='font-bold text-lg'>Apply</h3>
        <p>Fill out your profile and apply for opportunities.</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Apply"
        />
        <h3 className='font-bold text-lg'>Selection</h3>
        <p>You will be contacted for an interview by the company</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Selection"
        />
        <h3 className='font-bold text-lg'>Apply</h3>
        <p>Fill out your profile and apply for opportunities.</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Apply"
        />
        <h3 className='font-bold text-lg'>Apply</h3>
        <p>Fill out your profile and apply for opportunities.</p>
      </div>
      
    </div>
    
    </div>
  )
}

export default Process