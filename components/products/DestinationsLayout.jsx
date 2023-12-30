import React from 'react';

const DestinationCard = ({ imageUrl, title, project, link }) => (
  <div>
    <img src={imageUrl} alt={title} width="200" height="100" />
    <p className="font-bold">{title}</p>
    <a href={link} className="text-blue-500">{project}</a>
  </div>
);

const DestinationsLayout = () => {
  const destinations = [
    { imageUrl, title: 'Gahana', project: 'Medicine Project', link: '#' },
    { imageUrl, title: 'Uganda', project: 'Medicine and Health Project', link: '#' },
    { imageUrl, title: 'Brazil', project: 'Volunteer and Intern', link: '#' },
    // Add more destinations as needed
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-16 justify-center mt-16">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsLayout;
