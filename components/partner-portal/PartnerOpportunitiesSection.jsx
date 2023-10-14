import {Button, Card} from "flowbite-react";
import {HiArrowRight} from "react-icons/hi";

const PartnerOpportunitiesSection = ({opportunities}) => {
  return (
    <section className="container-fluid bg-aiesec-light-grey pt-12 pb-12" id="opportunities">
      <h4 className="text-3xl p-3 text-aiesec-dark-grey font-bold text-center">Opportunities</h4>
      <hr className="w-1/2 mx-auto mt-1 mb-8 border-aiesec-mid-grey"/>

      {/*<form className="container mx-auto px-72 mt-12">*/}
      {/*  <label htmlFor="default-search"*/}
      {/*         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>*/}
      {/*  <div className="relative">*/}
      {/*    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">*/}
      {/*      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"*/}
      {/*           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">*/}
      {/*        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
      {/*              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>*/}
      {/*      </svg>*/}
      {/*    </div>*/}
      {/*    <input type="search" id="default-search"*/}
      {/*           className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*           placeholder="Search opportunities..." required/> }*/}
      {/*    <button type="submit"*/}
      {/*            className="text-white absolute right-2.5 bottom-2.5 bg-aiesec-blue hover:bg-aiesec-mid-grey hover:text-aiesec-dark-grey transition ease-in focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</form>*/}

      <div
        className="container-fluid px-8 lg:px-0 lg:container mx-auto justify-center mt-16 mb-10 flex flex-wrap gap-x-8 gap-y-8">
        {
          opportunities?.length > 0 ?
            opportunities?.map((opportunity, index) => {
              return (
                <Card
                  key={index}
                  className="w-full md:w-96 lg:w-72 rounded-xl shadow-2xl shadow-aiesec-mid-grey text-center p-2 hover:shadow-md transition ease-in"

                >
                  <h5 className="text-2xl font-bold text-black mt-0 mb-0">
                    {opportunity?.title}
                  </h5>
                  {/*<div className="inline-block w-fit px-0 m-0 text-center mx-auto">*/}
                  {/*  <Badge*/}
                  {/*  color="gray"*/}
                  {/*  icon={HiClock}*/}
                  {/*>*/}
                  {/*<span className="pr-2 pl-1 text-md">{*/}
                  {/*  Math.floor((new Date() - new Date(opportunity?.postedDate)) / (1000 * 60 * 60 * 24))*/}
                  {/*} days ago</span>*/}
                  {/*</Badge>*/}
                  {/*</div>*/}
                  <div className="font-normal text-md pb-2 text-aiesec-dark-grey">
                    {
                      opportunity?.description
                    }
                  </div>
                  <div className="mt-1 text-center">
                    <Button
                      className="px-2 mx-auto font-bold bg-aiesec-blue hover:scale-105 transition ease-in hover:bg-aiesec-green"
                      size="sm"
                      pill
                      onClick={() => window.open(opportunity?.link, "_blank")
                      }
                    >
                      Apply now&ensp;{<HiArrowRight/>}
                    </Button>
                  </div>
                </Card>
              );
            })
            :
            <div className="text-center text-aiesec-light-grey">
              <h1 className="text-lg font-thin">No opportunities available at the moment</h1>
            </div>
        }
      </div>


    </section>

  );
}

export default PartnerOpportunitiesSection;