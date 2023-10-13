import {Link} from "@nextui-org/react";
import {Avatar, Button, Card, Carousel} from "flowbite-react";
import {HiArrowLeft} from "react-icons/hi";
import YouTubePlayer from "@components/partner-portal/Youtube";

const PartnerInfoSection = ({partnerData}) => {
  return (
    <section className="items-center justify-center text-center mx-auto">
      <div
        className="container-fluid hero-section">
        <div className="bg-aiesec-blue  w-full shadow-xl  text-center">
          

        </div>
        <div>
          
        </div>
        
      </div>
      
      

      <div className="my-4 container mx-auto">
        <h4 className="text-2xl p-3 text-aiesec-dark-grey font-bold">Partnership between AIESEC and {partnerData?.name}</h4>
        <hr className="w-1/2 mx-auto mt-1 mb-4"/>
        <p className="text-lg font-body p-4 pb-8">{partnerData?.partnership}</p>
      </div>

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
                      <img
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