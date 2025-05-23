import React from 'react';

interface CountryCardProps {
  country: {
    name: string;
    description: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-2">{country.name}</h3>
      <p className="text-gray-600">{country.description}</p>
    </div>
  );
};

export default CountryCard;