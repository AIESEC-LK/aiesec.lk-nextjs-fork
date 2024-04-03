import { Accordion, AccordionItem } from "@nextui-org/react";

function AboutInnobee() {
  return (
    <div>
      <div className="text-center pt-14">
        <h2 className="text-center text-3xl bg-gradient-to-r from-twinery-black to-twinery-red inline-block text-transparent bg-clip-text font-semibold pb-10 px-3">
          All you need to know about Innobee (FAQs)
        </h2>
      </div>
      <Accordion variant="splitted" className="px-10 sm:px-44">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Who can apply for the Innobee program?"
          className="accordion-item"
        >
          <p>
            Any undergraduate from any Sri Lankan university can participate.
            However, for the pilot stage, we will be accepting students only
            from the University of Moratuwa: Department of Electronic &
            Telecommunication Engineering, Department & Telecommunication
            Engineering, Faculty of Engineering, University of Colombo:
            Department of Statistics, Faculty of Science, University of
            Peradeniya: Department of Electrical and Electronic Engineering,
            Faculty of Engineering
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Are these internships paid?"
          className="accordion-item"
        >
          <p>Yes, all internships are paid.</p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="How long are the internships?"
          className="accordion-item"
        >
          <p>
            The duration depends on the specific opportunity you apply for.
            Internships typically range from 6 to 11 months.
          </p>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="What types of projects will interns be involved in?"
          className="accordion-item"
        >
          <p>
            Undergraduates from various academic backgrounds can apply for these
            projects, which include product development, engineering,
            administration and operations, marketing and branding, computer
            engineering, and computer science.
          </p>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          title="What skills do undergraduates need to have?"
          className="accordion-item"
        >
          <p>
            Candidates should possess a positive attitude, a willingness to
            learn, the ability to embrace challenges, and a commitment to
            continuous learning.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AboutInnobee;
