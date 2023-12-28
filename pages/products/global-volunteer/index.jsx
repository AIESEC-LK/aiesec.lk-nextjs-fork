import React from 'react';
import HtmlHead from '@components/partner-portal/HtmlHead';
import Nav from '@components/Nav';
import VideoTestimonials from '@components/products/VideoTestimonials';
import Layout from '@components/products/Layout';

function Volunteer() {
  // Image URL relative to the public directory
  const imageUrl = "/assets/images/partners/global/1489406725-min.png";
  const imageUrl1 = "/assets/images/partners/global/signup.png";
  const imageUrl2 = "/assets/images/partners/global/apply.png";
  const imageUrl3 = "/assets/images/partners/global/selection.png";
  const imageUrl4 = "/assets/images/partners/global/approved.png";
  const imageUrl5 = "/assets/images/partners/global/lesgo.png";

  return (
    <>
      <HtmlHead
        title={'Global Volunteer - AIESEC in Sri Lanka'}
        description={
          'Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world.'
        }
      />
      <Layout textColor="white" bgColor="global-volunteer">
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <h1>Description</h1>
        <VideoTestimonials />
        <h1>This is Page 1</h1>
      </Layout>

      {/* Second Layout with Tailwind CSS for margins */}
      <Layout>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <h1 className="text-center font-lato text-5xl font-extrabold leading-14 tracking-normal text-[rgba(248,90,64,1)]"> Our Destinatiodns</h1>



          {/* Grid of images */}
          <div className="grid grid-cols-4 gap-16 justify-center mt-16">
            {/* Repeat this block for each image */}
            <div>
              <img src={imageUrl} alt="Destination" width="200" height="100"/>
              <p className="font-bold">Gahana</p>
              <a href="#" className="text-blue-500">Medicine Project</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>
               <p className="font-bold">Uganda</p>
              <a href="#" className="text-blue-500">Medicine and Health Project</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>
                          <p className="font-bold">Brazil</p>
              <a href="#" className="text-blue-500">Volunteer and Intern </a>
            </div>

            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>
                          <p className="font-bold">Serbia</p>
              <a href="#" className="text-blue-500">Volunteer and Intern</a>
            </div>
            
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">Tunisia</p>
              <a href="#" className="text-blue-500">NOUR Projects</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>    
              <p className="font-bold">Romania</p>
              <a href="#" className="text-blue-500">Volunteer and Intern</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>    
              <p className="font-bold">Egypt</p>
              <a href="#" className="text-blue-500">NOUR Projects </a>
            </div>

            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">Mexico</p>
              <a href="#" className="text-blue-500">Volunteer </a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">Tanzania</p>
              <a href="#" className="text-blue-500">Medicine and Health Project</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">Turkey</p>
              <a href="#" className="text-blue-500">Volunteer</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">Italy</p>
              <a href="#" className="text-blue-500">Volunteer </a>
            </div>

            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">India</p>
              <a href="#" className="text-blue-500">Volunteer and Intern</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>              
            <p className="font-bold">Portugal</p>
              <a href="#" className="text-blue-500">Volunteer and Intern</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>             
             <p className="font-bold">Greece</p>
              <a href="#" className="text-blue-500">Volunteer and Intern</a>
            </div>
            <div>
            <img src={imageUrl} alt="Destination" width="200" height="100"/>
              <p className="font-bold">Sri Lanka</p>
              <a href="#"className="text-blue-500">Volunteer and Intern </a>
            </div>


            {/* ... More image blocks ... */}
          </div>

          
        </div>
      </Layout>
      <Layout>
      <Layout>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32">

          <div className="flex justify-center mt-8">
                  <button 
          className="custom-button bg-white-500 text-[rgba(248,90,64,1)] px-6 py-3 rounded-md hover:bg-white-700 border-2 border-[rgba(248,90,64,1)]"
        >
          Learn More
        </button>



          </div>
        </div>

        <h1 className="text-center font-lato text-5xl font-extrabold leading-14 tracking-normal text-[rgba(248,90,64,1)]"> The Process</h1>

        <div className="container mx-auto mt-8">
      <div className="grid grid-cols-5 gap-8">
        {/* Repeat this block for each column */}
        <div className="text-center">
          <img src={imageUrl1} alt="Partner Image" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-lg font-bold">Sign Up</p>
          <p className="italic text-sm text-gray-500">Sign up to create your account and access our opportunities. It's free!</p>
        </div>
        <div className="text-center">
          <img src={imageUrl2} alt="Partner Image" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-lg font-bold">Apply</p>
          <p className="italic text-sm text-gray-500">Fill out your profile and apply for opportunities.</p>
        </div>
        <div className="text-center">
          <img src={imageUrl3} alt="Partner Image" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-lg font-bold">Selection</p>
          <p className="italic text-sm text-gray-500">You will be contacted for an interview by the company</p>
        </div>
        <div className="text-center">
          <img src={imageUrl4} alt="Partner Image" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-lg font-bold">Approved</p>
          <p className="italic text-sm text-gray-500">Once the interview is completed successfully, pay the AIESEC program registration fee to get approved.</p>
        </div>
        <div className="text-center">
          <img src={imageUrl5} alt="Partner Image" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-lg font-bold">Let’s Go</p>
          <p className="italic text-sm text-gray-500">AIESEC will now support in visa, departure and experience abroad.</p>
        </div>
        {/* Repeat this block for each column */}
      </div>
    </div>

      </Layout>
      </Layout>
    </>
  );
}

export default Volunteer;
