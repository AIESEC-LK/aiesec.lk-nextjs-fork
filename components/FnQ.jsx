import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <h2 className=" text-center text-3xl text-aiesec-blue font-semibold pt-24 pb-4">
        Frequently Asked Questions
      </h2>
      <Accordion variant="splitted" className="px-10 sm:px-44">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What is AIESEC ?"
          className="accordion-item"
        >
          <p>
            AIESEC is an international youth-run and led, non-governmental and
            not-for-profit organization that provides young people with
            leadership development, cross-cultural internships, and global
            volunteer exchange experiences. The organization focuses on
            empowering young people to make a progressive social impact
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="What are the Opportunities of  AIESEC?"
          className="accordion-item"
        >
          <p>
            AIESEC's Premium Partners are present in different countries and
            territiories around the world. Each partner opens around 10 - 70
            opportunities yearly in the global headquarters or regional/country
            offices. Over 400 opportunities are available yearly for top
            candidates across backgrounds.
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="What is Global Volunteer ?"
          className="accordion-item"
        >
          <p>
            Our Global Volunteer projects around the world exist because we have
            committed to support the movement to achieve the 17 Sustainable
            Development Goals by the year 2030.
          </p>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="How to become an AIESEC Member?"
          className="accordion-item"
        >
          <p>
            Check if your university AIESEC Entity’s recruitments are open. If
            open, click on the Apply Now button and send in your application to
            join AIESEC!
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
