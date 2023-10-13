import {Link} from "@nextui-org/react";
import {Avatar, Button, Card, Carousel} from "flowbite-react";
import {HiArrowLeft} from "react-icons/hi";

const PartnerInfoSection = ({partnerData}) => {
  return (
    <section className="items-center justify-center text-center mx-auto">
      <div
        className="container-fluid hero-section">
        <div className="bg-aiesec-blue h-[120px] w-full shadow-xl p-5 text-left">
          <Link href="/partner-portal/#main">
            <Button
              className="px-2"
              size="sm"
              color="light"
              pill
            >
              <HiArrowLeft/>&ensp;
              Back to all partners
            </Button>
          </Link>

        </div>
        <Avatar
          size="xl"
          className="absolute top-[60px] left-0 right-0 mx-auto"
          bordered
          img={partnerData?.logo}
          rounded
        />
        <div className="bg-white h-[120px] w-full"/>
        <h1 className="text-4xl p-0 m-0">{partnerData?.name}</h1>
        <h3 className="text-2xl py-4 text-aiesec-mid-grey">{partnerData?.type}</h3>
      </div>
      <div className="flex justify-center mt-2 mb-8 gap-6">
        <Link
          href="#opportunities"
          className="w-fit shadow-lg py-3 px-5 inline-block acrounded-2xl transition ease-in shadow-gray-200 hover:shadow-gray-200 hover:shadow-md">
          <h5 className="text-3xl p-0 text-aiesec-blue">{
            partnerData?.opportunities ? partnerData?.opportunities?.length : 0
          }</h5>
          <p className="text-md p-1 text-aiesec-dark-grey font-bold">
            {
              partnerData?.opportunities?.length === 1 ?
                "Opportunity" :
                "Opportunities"
            }
          </p>
        </Link>
      </div>

      <div className="my-4 container mx-auto">
        <h4 className="text-2xl p-3 text-aiesec-dark-grey font-bold">About</h4>
        <hr className="w-1/2 mx-auto mt-1 mb-4"/>
        <p className="text-lg font-body p-4 pb-8">{partnerData?.about}</p>
      </div>

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