import {Avatar, Button, Card, Carousel} from "flowbite-react";
import YouTubePlayer from "@components/partner-portal/YoutubePlayer";
import Link from "next/link";
import Image from "next/image";

const PartnerInfoSection = ({partnerData}) => {
  return (
    <section className="items-center justify-center text-center mx-auto">
      {/*<div*/}
      {/*  className="container-fluid hero-section">*/}
      {/*  <div className="bg-aiesec-blue  w-full shadow-xl  text-center">*/}


      {/*  </div>*/}
      {/*  <div>*/}

      {/*  </div>*/}

      {/*</div>*/}

      {
        partnerData?.about && <div className="mt-4 mb-12 container-fluid lg:container mx-auto">
          <div>
            <h2 className='text-4xl font-bold text-center mb-6 py-10 leading-10'>
              <div className="font-cursive text-6xl pb-2 text-aiesec-mid-grey">Welcome to</div>
              <div><span className="text-aiesec-blue">Unilever's</span> Partner Portal</div>
            </h2>
          </div>
          <div className='flex items-center px-8 gap-8 my-4 flex-wrap lg:flex-nowrap'>
            {
              partnerData?.youtubeVideoID && <div className='lg:pr-8 m-auto pt-14'>
                <YouTubePlayer videoId={partnerData?.youtubeVideoID}/>
              </div>
            }
            {/* <img src="../public/assets/images/landing/../public/assets/images/landing/asl-img-min.jpg.png" alt="uniliever" width={180} /> */}
            <div className="mb-4">
              <h2 className='text-2xl p-3 text-aiesec-dark-grey font-bold'>About {partnerData?.name}</h2>
              <hr className="mx-auto mt-1 mb-4"/>
              <p className="mt-2 text-justify font-body mb-5">{partnerData?.about.para1}</p>
              <p className="text-justify font-body p-0">{partnerData?.about.para2}</p>
              
            </div>
            
          </div>
          <div className="px-6">
          <p className=" text-justify font-body pb-6">{partnerData?.about.para3}</p>
              <Link href="#opportunities" className="mt-2 flex justify-center">
                <Button className=" text-white bg-aiesec-blue px-8 font-bold rounded-3xl">Explore Our
                  Opportunities
                </Button>
              </Link>
          </div>
        </div>
      }


      {
        partnerData?.partnership && <div className="my-8 container-fluid lg:container mx-auto">
          <h4 className="text-2xl p-3 text-aiesec-dark-grey font-bold">Partnership between AIESEC
            and {partnerData?.name}</h4>
          <hr className="w-1/2 mx-auto mt-1 mb-4"/>
          {
            partnerData?.partnership?.images && <div className="h-[25vh] md:h-[50vh] mt-10 mb-8 px-8">
              <Carousel pauseOnHover className="shadow-xl">
                {
                  partnerData?.partnership?.images.map((image, index) => {
                    return (
                      <div className="relative h-full" key={index}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            alt="Photograph"
                            width={500}
                            height={500}
                            src={image}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {/*<div*/}
                        {/*  className="absolute inset-0 bg-gradient-to-t gradien from-black to-transparent opacity-80"></div>*/}
                        {/*<div className="absolute flex items-center justify-center bottom-16 right-0 left-0">*/}
                        {/*  <h4 className="text-xl text-white text-center">{project?.title}</h4>*/}
                        {/*</div>*/}
                      </div>
                    );
                  })
                }
              </Carousel>
            </div>
          }
          <p className="text-lg font-body pt-4 px-8 pb-8 text-justify">{partnerData?.partnership.description}</p>
        </div>
      }

      {/* Video */}
      {/* <div className="pb-6">
      <YouTubePlayer videoId="juKVUM1-cKE" />
      </div> */}


      {partnerData?.testimonials?.length > 0 && <div className="my-4 container mx-auto">
        <h4 className="text-2xl p-3 text-aiesec-dark-grey font-bold">Testimonials</h4>
        <hr className="w-1/2 mx-auto mt-1 mb-4"/>
        <div className="flex flex-wrap justify-center gap-12 mt-8 mb-16 container pt-2">
          {
            partnerData?.testimonials?.map((testimonial, index) => {
              return (
                <Card className="w-1/4 rounded-xl shadow-xl shadow-gray-200" key={index}>
                  <div className="flex flex-col items-center p-1">
                    <Avatar
                      rounded
                      size="lg"
                      className="mb-3 rounded-full shadow-lg"
                      height="96"
                      src=""
                      width="96"
                    />
                    <h5 className="mb-1 text-xl font-medium text-aiesec-dark-grey dark:text-white">
                      {testimonial?.name}
                    </h5>
                    <span className="text-md text-aiesec-blue dark:text-gray-400">
                    {testimonial?.role}
                    </span>
                    <div className="flex space-x-3 lg:mt-4 px-2">
                      <p className="text-gray-500 text-md">{testimonial?.content}</p>
                    </div>
                  </div>
                </Card>
              );
            })
          }
        </div>
      </div>}

      {partnerData?.projects?.length > 0 && <div className="my-3 container mx-auto">
        <h4 className="text-2xl p-3 text-aiesec-dark-grey font-bold">Projects done with AIESEC</h4>
        <hr className="w-1/2 mx-auto mt-1 mb-4"/>
        <div className="h-[480px] mt-10 mb-20">
          <Carousel pauseOnHover>
            {
              partnerData?.projects?.map((project, index) => {
                return (
                  <div className="relative h-full" key={index}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        width={500}
                        height={500}
                        alt={project?.title + " image"}
                        src={project?.image}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t gradien from-black to-transparent opacity-80"></div>
                    <div className="absolute flex items-center justify-center bottom-16 right-0 left-0">
                      <h4 className="text-xl text-white text-center">{project?.title}</h4>
                    </div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>
      </div>}

    </section>
  )
}

export default PartnerInfoSection;