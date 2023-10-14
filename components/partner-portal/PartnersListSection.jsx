import PartnerCard from "@components/partner-portal/PartnerCard";

const PartnersListSection = ({partners}) => {
  const uniqueTypes = [...new Set(partners.map((partner) => partner.type))];

  return (
    <section className="partners-list-section mt-0 mb-16 justify-center container-fluid lg:container mx-auto pt-2" id="main">
      <div className="w-full mb-32 justify-center px-8 lg:px-0">
        <h2 className="text-4xl text-center mt-12 mb-6 w-100 font-medium"><span
          className="text-aiesec-blue font-bold">Opportunities</span> from
          our partners</h2>

        {uniqueTypes.map((type) => (
          <div key={type} className="my-16">
            {
              type && <><h2 className="text-3xl font-bold text-center mb-6">{type}</h2>
                <hr className="mb-14"/>
              </>
            }
            <div className="justify-center my-8 flex flex-wrap gap-x-12 gap-y-12 container mx-auto">
              {partners.filter((partner) => partner.type === type).map((partner) => (
                <PartnerCard key={partner.id} id={partner.id} name={partner.name} logo={partner.logo}/>))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnersListSection;