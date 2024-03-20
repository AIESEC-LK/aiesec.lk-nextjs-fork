import Link from "next/link";
import { Button, Card } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import Data from "@pages/partner-portal/Twinery/data.json";

function Opportunities({ opportunities }) {
  return (
    <div>
      <div className="text-center pt-24">
        <h2 className="text-center text-3xl bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text font-semibold pb-10 px-3">
          Internship opportunities specially for AIESECers
        </h2>
      </div>
      {/* Card Details */}
      <div className="container-fluid px-10 lg:px-0 lg:container mx-auto justify-center flex flex-wrap gap-x-8 gap-y-8">
        {Data.map((opportunity) => (
          <Card
            key={opportunity.id}
            className="w-96 rounded-xl shadow-2xl shadow-aiesec-mid-grey text-center p-2 hover:shadow-md transition ease-in"
          >
            <div className="flex">
              <div>
                <h5 className="text-2xl text-left font-bold bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text mt-0 mb-0">
                  {opportunity.title}
                </h5>
                <br />
                <p className="text-left">for Undergratuates</p>
                <p className="text-left">Job Description</p>
              </div>
              <p className="text-left">Application Deadline: <span>{opportunity.deadline}</span></p>
            </div>
            <div className="font-normal text-md pb-2 text-aiesec-dark-grey"></div>
            <div className="mt-1 text-center">
              <Link href={opportunity.link} target="_blank">
                <Button
                  className="px-2 mx-auto font-bold bg-gradient-to-r from-twinery-black to-twinery-red hover:scale-105 transition ease-in hover:bg-aiesec-green"
                  size="sm"
                  pill
                >
                  Apply now&ensp;{<HiArrowRight />}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;
