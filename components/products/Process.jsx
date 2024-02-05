import Image from "next/image";

function Process() {
  return (
    <div>
      <h2 className="text-global-volunteer flex justify-center text-3xl font-bold pb-14 p-8">
        Process
      </h2>
      <div className="flex flex-col justify-around md:flex-row">
        <div className="flex flex-col items-center justify-center mb-20">
          <Image
            src="/assets/images/products/volunteer/Signup.png"
            width={100}
            height={100}
            alt="Sign Up"
          />
          <h3 className="font-bold text-lg">Sign Up</h3>
          <p className="w-2/3 text-center">
            Sign up to create your account and access our opportunities. It's
            free!
          </p>
          
        </div>
        <div className="flex flex-col items-center justify-center mb-20">
          <Image
            src="/assets/images/products/volunteer/Apply.png"
            width={100}
            height={100}
            alt="Apply"
          />
          <h3 className="font-bold text-lg">Apply</h3>
          <p className="w-2/3 text-center">
            Fill out your profile and apply for opportunities.
          </p>
          
        </div>
        <div className="flex flex-col items-center justify-center mb-20">
          <Image
            src="/assets/images/products/volunteer/Selection.png"
            width={100}
            height={100}
            alt="Apply"
          />
          <h3 className="font-bold text-lg">Selection</h3>
          <p className="w-2/3 text-center">
            You will be contacted for an interview by the company
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-20">
          <Image
            src="/assets/images/products/volunteer/Approved.png"
            width={100}
            height={100}
            alt="Approved"
          />
          <h3 className="font-bold text-lg">Approved</h3>
          <p className="w-2/3 text-center">
            Once the interview is completed successfully, pay the AIESEC program
            registration fee to get approved..
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-20">
          <Image
            src="/assets/images/products/volunteer/Lets go.png"
            width={100}
            height={100}
            alt="Let’s Go"
          />
          <h3 className="font-bold text-lg">Let’s Go</h3>
          <p className="w-2/3 text-center">
            AIESEC will now support in visa, departure and experience abroad..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
