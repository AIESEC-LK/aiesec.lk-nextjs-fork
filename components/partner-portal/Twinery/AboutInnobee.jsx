import { Accordion, AccordionItem } from "@nextui-org/react";

function AboutInnobee() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-center text-3xl bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text font-semibold pb-10 px-3">
          all you need to know about Innobee
        </h2>
      </div>
      <Accordion variant="splitted" className="px-10 sm:px-44">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Who can apply for “Innobee” program?"
          className="accordion-item"
        >
          <p>
            Any undergraduate from any university in Sri Lanka can apply. For
            the first phase, this is only opened for undergraduates of
            University of Colombo and University of Moratuwa.
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Is this a paid internship or not?"
          className="accordion-item"
        >
          <p>Yes all the internship programs are paid.</p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="How long are these internships?"
          className="accordion-item"
        >
          <p>
            That depends on the opportunity you apply. They vary between 6
            months to 11 months.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AboutInnobee;
