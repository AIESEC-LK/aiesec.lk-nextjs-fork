import PartnerCard from "@components/partner-portal/PartnerCard";
import PartnerListNew from "@components/partner-portal/PartnerListNew";

const PartnersListSection = ({ partners }) => {
  const uniqueTypes = [...new Set(partners.map((partner) => partner.type))];

  return (
    <section
      className="partners-list-section m-0 pb-8 justify-center container-fluid mx-auto z-10 bg-white relative pt-24"
      id="main"
    >
      <div className="w-full mb-32 justify-center px-8 lg:px-0 lg:container mx-auto ">
        <h2 className="text-4xl text-center mb-6 w-100 font-medium">
          <span className="text-aiesec-blue font-bold">Opportunities</span> from
          our partners
        </h2>

        <div className="md:flex justify-around md:px-72">
        {uniqueTypes.map((type) => (
          <div key={type} className="my-16">
            {type && (
              <>
                <h2 className="text-3xl font-bold text-center mb-6">{type}</h2>
                <hr className="mb-14" />
              </>
            )}
            <div className="justify-center my-8 flex flex-wrap gap-x-12 gap-y-12 container mx-auto">
              {partners
                .filter((partner) => partner.type === type)
                .map((partner) => (
                  <PartnerCard
                    key={partner.id}
                    id={partner.id}
                    name={partner.name}
                    logo={partner.logo}
                  />
                ))}
            </div>
          </div>
        ))}
        <PartnerListNew />
        </div>
      </div>
    </section>
  );
};

export default PartnersListSection;
