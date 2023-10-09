import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <h2 className=" text-center text-3xl text-aiesec-blue font-semibold">
        Frequently Asked Questions
      </h2>
      <Accordion variant="splitted" className="px-44">
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
            AIESEC is an international youth-run and led, non-governmental and
            not-for-profit organization that provides young people with
            leadership development, cross-cultural internships, and global
            volunteer exchange experiences. The organization focuses on
            empowering young people to make a progressive social impact
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="What is Global Volunteer ?"
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
          key="4"
          aria-label="Accordion 4"
          title="How to become an AIESEC Member?"
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
      </Accordion>
    </div>
  );
}
