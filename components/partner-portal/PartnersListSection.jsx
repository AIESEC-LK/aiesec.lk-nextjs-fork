import PartnerCard from "@components/partner-portal/PartnerCard";

const PartnersListSection = ({partners}) => {
  const uniqueTypes = [...new Set(partners.map((partner) => partner.type))];

  return (
    <section className="partners-list-section mt-0 mb-16 justify-center container mx-auto pt-2" id="main">
      <div className="partners-list-section__content mb-32 justify-center">
        {uniqueTypes.map((type) => (
          <div key={type} className="my-20">
            <h2 className="text-4xl font-bold text-center mb-5">{type + "s"}</h2>
            <hr className="mb-10"/>
            <div className="w-100 justify-center my-8 flex flex-wrap gap-x-12 gap-y-12">
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