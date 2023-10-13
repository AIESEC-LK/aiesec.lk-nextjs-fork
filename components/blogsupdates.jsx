import React from "react";
import { useState } from "react";
import blogimage1 from "@public/assets/images/blogs/blog1-min.jpg";
import blogimage2 from "@public/assets/images/blogs/blog2-min.jpg";
import blogimage3 from "@public/assets/images/blogs/blog3-min.jpg";
import blogimage4 from "@public/assets/images/blogs/blog4-min.jpg";
import BlogSlide from "./Micro_components/blogslide";

const BlogsSection = () => {
  const BlogDetails = [
    {
      image: blogimage1,
      headphrase: "The Demand For Leadership in IT Industry.",
      entity: "NSBM",
    },
    {
      image: blogimage2,
      headphrase: "The Demand For Leadership in IT Industry.",
      entity: "NSBM",
    },
    {
      image: blogimage3,
      headphrase: "The Demand For Leadership in IT Industry.",
      entity: "NSBM",
    },
    {
      image: blogimage4,
      headphrase: "The Demand For Leadership in IT Industry.",
      entity: "NSBM",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 2 + BlogDetails.length) % BlogDetails.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % BlogDetails.length);
  };

  return (
    <section>
      <div className="">
        <h2 className="text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-20">
          News & Updates
        </h2>
        <div className="flex justify-center">
          <div className=" w-4/5">
            <p className=" text-xl font-semibold ">
              <span
                className=" h-1 w-1 bg-aiesec-blue text-aiesec-blue rounded-xl mr-2"
                content=" "
              >
                .
              </span>
              Blogs
              {/* <span>
                <div className=" float-right">
                  <button
                    onClick={previousSlide}
                    className="text-sm py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-l-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue"
                  >
                    Prev
                  </button>
                  <button
                    onClick={nextSlide}
                    className=" text-sm py-0.5 px-2 text-aiesec-dark-grey hover:text-white hover:bg-aiesec-blue rounded-r-md border-2 border-aiesec-dark-grey hover:border-aiesec-blue"
                  >
                    Next
                  </button>
                </div>
              </span> */}
            </p>
            <div className="w-full lg:grid lg:grid-cols-4 lg:gap-x-5 lg:visible hidden">
              <BlogSlide
                image={blogimage1}
                headphrase="Japanese Approaches to Purposeful Leadership."
                entity={"NSBM"}
              />
              <BlogSlide
                image={blogimage2}
                headphrase="Bravery Beyond Bullets. Hacksaw Ridge's Quiet Hero"
                entity={"NSBM"}
              />
              <BlogSlide
                image={blogimage3}
                headphrase="Leadership Beyond Titles:My AIESEC Self-Discovery"
                entity={"CN"}
              />
              <BlogSlide
                image={blogimage4}
                headphrase="SoundUp 2.0 rewind! A night of music, togetherness and endless fun"
                entity={"NSBM"}
              />
            </div>
            <div className=" block sm:hidden">
              <BlogSlide
                image={blogimage1}
                headphrase="The Demand For Leadership in IT Industry."
                entity={"NSBM"}
              />
            </div>
            <div className="md:block lg:hidden hidden">
              <div className=" grid grid-cols-2 gap-x-4">
                <BlogSlide
                  image={blogimage1}
                  headphrase="The Demand For Leadership in IT Industry."
                  entity={"NSBM"}
                />
                <BlogSlide
                  image={blogimage2}
                  headphrase="The Demand For Leadership in IT Industry."
                  entity={"USJ"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-10">
          <a href="https://www.aiesec.lk/blog/" target="_blank">
            <button className=" text-aiesec-blue border-2 border-aiesec-blue px-10 py-1 font-semibold rounded-3xl ">
              View All
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
